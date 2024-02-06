import React, {useState, useEffect, useRef} from "react";
import { Questions } from "./questions.js";
import { CountdownTimer } from "./countdownTimer.js";
import { db, storage } from "../config/firebase.js"
import { addDoc, collection } from 'firebase/firestore';
import { ref, uploadBytes } from "firebase/storage";
var sample = require( '@stdlib/random-sample' );

const mimeType = "audio/webm";

export const Experiment = ( { subID, pageEvent } ) => {
    // carousel states
    const [topicPairs, setTopicPairs] = useState([]);
    const [completed, setCompleted] = useState(0);
    const [hideButton, setHideButton] = useState(false);
    const [buttonText, setButtonText] = useState("skip");
    
    const [index, setIndex] = useState();
    const [answered, setAnswered] = useState([]);
    const [skipped, setSkipped] = useState([]);
    const [hideStop, setHideStop] = useState(true);

    // audio states
    const [permission, setPermission] = useState(false);
    const [recordingStatus, setRecordingStatus] = useState("inactive");
    const [audioClip, setAudioClip] = useState([]);
    const [audio, setAudio] = useState(null);
    const [stream, setStream] = useState(null);
    const mediaRecorder = useRef(null);
    const [blob, setBlob] = useState(null);

    // narrative follow-up question states:
    const [q1, setQ1] = useState(0);
    const [q2, setQ2] = useState(0);
    const [q3, setQ3] = useState(0);
    const [q4, setQ4] = useState(0);
    const [q5, setQ5] = useState(0);

    // generating topics
    // topic | relationship
    const categories = [
        ["something financial","family member"],
        ["something financial","friend"],
        ["something financial","romantic partner"],
        ["something financial","classmate or colleague"],
        ["something financial","employer or employee"],
        ["something financial","neighbor or roommate"],
        ["something financial","business or property owner"],
        ["something financial","stranger or acquaintance"],
        ["a social gathering","family member"],
        ["a social gathering","friend"],
        ["a social gathering","romantic partner"],
        ["a social gathering","classmate or colleague"],
        ["a social gathering","employer or employee"],
        ["a social gathering","neighbor or roommate"],
        ["a social gathering","business or property owner"],
        ["a social gathering","stranger or acquaintance"],
        ["health","family member"],
        ["health","friend"],
        ["health","romantic partner"],
        ["health","classmate or colleague"],
        ["health","employer or employee"],
        ["health","neighbor or roommate"],
        ["health","business or property owner"],
        ["health","stranger or acquaintance"],
        ["identity","family member"],
        ["identity","friend"],
        ["identity","romantic partner"],
        ["identity","classmate or colleague"],
        ["identity","employer or employee"],
        ["identity","neighbor or roommate"],
        ["identity","business or property owner"],
        ["identity","stranger or acquaintance"],
        ["parenting","family member"],
        ["parenting","friend"],
        ["parenting","romantic partner"],
        ["parenting","classmate or colleague"],
        ["parenting","employer or employee"],
        ["parenting","neighbor or roommate"],
        ["parenting","business or property owner"],
        ["parenting","stranger or acquaintance"],
    ]

    const topicIndices = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
    21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39];

    const sampleTopic = () => {
        const out = sample(topicIndices, {
            'probs': [0.025244,0.021687,0.027809,0.035271,0.025011,0.023087,0.034805,0.021279,
                0.021221,0.021746,0.021221,0.033406,0.027109,0.022853,0.030549,0.02262,
                0.019647,0.021804,0.024311,0.035796,0.028975,0.023145,0.033056,0.021862,
                0.020813,0.023903,0.023845,0.028334,0.02606,0.022853,0.027168,0.024310,
                0.019181,0.020275,0.020813,0.028275,0.021513,0.021396,0.027809,0.019938],
            'size': 1,
            'replace': true
        });

        setTopicPairs(categories[out[0]])
        setIndex(out[0])
    }

    ///if the index is in the answered list, skip it and sample the topic again.
    useEffect(()=>{
        if (answered.includes(index)) {
            sampleTopic();
        }
        setSkipped(skipped => [...skipped,categories[index]]);
    }, [index])

    useEffect(()=>{
        sampleTopic();
    }, [])

    // DATA HANDLING //

    const dataCollectionRef = collection(db, "responses")

    // upload audio to firestore storage
    const sendAudio = async () => {

        const narrativeFolderRef = ref(storage, `narratives/SUB_${subID}/${subID}_${topicPairs[0]}_${topicPairs[1]}.webm`)

        try { 
            await uploadBytes(narrativeFolderRef, blob, {contentType:mimeType})
            console.log("Audio uploaded successfully.")

        } catch(err) {
            console.error(err.code, err.message)
        }
    }
    // Upload response data to firebase
    const sendData = async () => {
        try {
            await addDoc(dataCollectionRef, {
                userID: subID,
                relationship:topicPairs[1],
                topic:topicPairs[0],
                q1: q1,
                q2: q2,
                q3: q3,
                q4: q4,
                q5: q5,
                skipped: JSON.stringify(skipped),
        });
        } catch (err) {
            console.error(err)
        }
    }

    const clearRadios = () => {
        setQ1(0);
        setQ2(0);
        setQ3(0);
        setQ4(0);
        setQ5(0);
        setHideButton(false);
    }

    // RECORDING FUNCTIONALITY //
    const getMicPermission = async () => {
        if ("MediaRecorder" in window) {
            try {
                const streamData = await navigator.mediaDevices.getUserMedia({
                    audio: true,
                    video: false,
                });
                setPermission(true);
                setStream(streamData);
            } catch (err) {
                alert(err.message)
            }
        } else {
            alert("The MediaRecorder API is not supported in your broswer.")
            }
        }

    const startRecording = async () => {
        setRecordingStatus("recording");

        const media = new MediaRecorder(stream, { type: mimeType });

        mediaRecorder.current = media;
        mediaRecorder.current.start();

        let localAudioClips = [];
        mediaRecorder.current.ondataavailable = (event) => {
           if (typeof event.data === "undefined") return;
           if (event.data.size === 0) return;
           localAudioClips.push(event.data);
        };
        setAudioClip(localAudioClips);
    };

    // end audio recording + send file to firestore
    const stopRecording = () => {
        setRecordingStatus("inactive");

        mediaRecorder.current.stop();
        mediaRecorder.current.onstop = () => {

            const audioBlob = new Blob(audioClip, { type: mimeType });
            const audioUrl = URL.createObjectURL(audioBlob);
            setAudio(audioUrl);
            setAudioClip([]);

            setBlob(audioBlob)
            setButtonText('continue')
            setHideButton(true)
        };
    };

    const toggleStop = () => {
        if (recordingStatus === "recording") {
            setHideStop(false)
        }
    }

    useEffect(()=>{
          const timer = setTimeout(()=>{
              toggleStop();
          }, 60000)
    
          return () => {
            clearTimeout(timer)
          }
      }, [recordingStatus])

    // Progression across the experiment

    useEffect(()=>{
        if (q1 && q2 && q3 && q4 && q5 !== 0){
            setHideButton(false);
        }
    },[q1,q2,q3,q4,q5])

    useEffect(()=>{
        if (completed === 4){
            pageEvent();
        }
    },[completed])

    const handleNext = () => {
        if (audio) {
            setCompleted((prev)=>prev+1)
            sendAudio();
            sendData();
            setButtonText('skip')
            setHideButton(false)
            setHideStop(true)

            setAnswered(answered => [...answered,index]);
        }

        clearRadios();
        setAudio(null);
        setBlob(null);
        sampleTopic();
    }

    const handleRerecord = () => {
        setAudio(null)
        startRecording()
    }

    // TROUBLESHOOTING


    console.log("recording status:",recordingStatus, "hideStop?", hideStop)

    return(
        <div className="container">
            {!permission && 
            <>
                <p>Before we can begin, please select the button below to provide audio permissions:</p>
                <button id="enable-audio-button" onClick={getMicPermission} >Enable Audio Permissions</button>
            </>
            }

            { permission &&
            <>
                <p>Tell us about a time you experienced an interpersonal conflict with:<br/><br/>
                a <strong>{topicPairs[1]}</strong> related to <strong>{topicPairs[0]}</strong> <br/><br/>
                </p>

                {recordingStatus === "inactive" && permission && !audio &&
                <>
                    <button id='start-recording-button' onClick={startRecording}>Start recording</button>
                </>
                }
               
               {recordingStatus === "recording" &&
                <div>
                    <button id='stop-recording-button' onClick={stopRecording} disabled={hideStop} style={{background: hideStop ? 'grey' : ''}}>End recording</button>
                    <CountdownTimer forceStop={stopRecording} />
                </div>
                }

                { audio && 
                <>
                    <p>Your audio recording: </p> 
                    <audio src={audio} controls></audio>
                    <div><button className="re-record-button" onClick={handleRerecord}>re-record? (optional)</button></div>

                    <>
                    <Questions q1={q1} q2={q2} q3={q3} q4={q4} q5={q5} setQ1={setQ1} setQ2={setQ2} setQ3={setQ3} setQ4={setQ4} setQ5={setQ5} />
                    </>
                </>
                }

                {hideButton && recordingStatus !== "recording" &&
                    <>
                        <div><span className="subtext">Please answer all the questions above to proceed.</span></div>
                    </>
                }

                {recordingStatus !== "recording" &&
                <>
                    <div>
                        <button className="advance-button" onClick={handleNext} disabled={hideButton} style={{background: hideButton ? 'grey' : ''}}> {buttonText} </button>
                    </div>
                </>                    
                }


                <div id="progress-tracker">
                    <span className="subtext">Recordings completed: {completed}/4 </span>
                </div>
            
            
            </>
            }

            
        </div>
    );
};