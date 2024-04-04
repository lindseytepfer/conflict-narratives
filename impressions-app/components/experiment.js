import React, {useState, useEffect, useRef} from "react";
import { CountdownTimer } from "./countdownTimer.js";
import { storage } from "../config/firebase.js"
import { ref, uploadBytes } from "firebase/storage";

const mimeType = "audio/mp3";

export const Experiment = ( { subID, topic, pageEvent } ) => {
    // progression states
    const [index, setIndex] = useState(0);
    const [hideButton, setHideButton] = useState(false);
    const [hideStop, setHideStop] = useState(true);

    // audio states
    const [permission, setPermission] = useState(false);
    const [recordingStatus, setRecordingStatus] = useState("inactive");
    const [audioClip, setAudioClip] = useState([]);
    const [audio, setAudio] = useState(null);
    const [stream, setStream] = useState(null);
    const mediaRecorder = useRef(null);
    const [blob, setBlob] = useState(null);


    // DATA HANDLING //
    // upload audio to firestore storage
    const sendAudio = async () => {

        const narrativeFolderRef = ref(storage, `impressions/SUB_${subID}/SUB_${subID}_${topic}_${index}.mp3`)

        try { 
            await uploadBytes(narrativeFolderRef, blob, {contentType:mimeType})
            console.log("Audio uploaded successfully.")

        } catch(err) {
            console.error(err.code, err.message)
        }
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
            setHideButton(false)
        };
    };

    // show the stop button if the person is recording
    const toggleStop = () => {
        if (recordingStatus === "recording") {
            setHideStop(false)
        }
    }

    // clear the audio and re-start the recording
    const handleRerecord = () => {
        setAudio(null)
        startRecording()
    }

    // allow stop after 1 minute has passed
    useEffect(()=>{
          const timer = setTimeout(()=>{
              toggleStop();
          }, 5000) // 60000
    
          return () => {
            clearTimeout(timer)
          }
      }, [recordingStatus])

    // Progression across the experiment

    useEffect(()=>{
        if (index === 4){
            pageEvent();
        }
    },[index])

    const handleNext = () => {
        if (audio) {
            setIndex((prev)=>prev+1)
            sendAudio();
            setHideButton(false)
            setHideStop(true)
        }

        setAudio(null);
        setBlob(null);

    }

    const questionList = ['Please give us a summary/recap of this story in your own words',
    'What is your opinion/evaluation of what happened in the story? For example, what do you think about the storyteller as well as the others in the story?',
    'What questions would you want to ask to fully understand the situation? ',
    'How do you think you would respond to the storyteller if you were the listener in real life?']

    // TROUBLESHOOTING
    console.log("recording status:",recordingStatus, "hideStop?", hideStop, "hideButton?", hideButton)

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
                <p><h3> {questionList[index]} </h3><br/><br/>
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
                </>
                }

                {hideButton && recordingStatus !== "recording" &&
                    <>
                        <div><span className="subtext">Please complete the above section to proceed.</span></div>
                    </>
                }

                {recordingStatus !== "recording" && audio &&
                <>
                    <div>
                        <button className="advance-button" onClick={handleNext} > next </button>
                    </div>
                </>                    
                }
                <p>recording: {index+1}/4</p>      
            </>
            }


        </div>
    );
};