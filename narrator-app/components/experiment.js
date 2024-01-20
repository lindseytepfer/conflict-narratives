import React, {useState, useEffect, useRef} from "react";
import { Questions } from "./questions.js";
import { db, storage } from "./firebase.js"
import { addDoc, collection } from 'firebase/firestore';
import { ref, uploadBytes } from "firebase/storage";

const mimeType = "audio/wav";

export const Experiment = ( { subID, pageEvent, topicPairs, setTopicPairs } ) => {
    const [index, setIndex] = useState(0)
    const [completed, setCompleted] = useState(0)
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

    const dataCollectionRef = collection(db, "responses")

    // upload audio to firestore storage
    const sendAudio = async () => {

        const narrativeFolderRef = ref(storage, `narratives/${subID}_audio`)

        try { 
            await uploadBytes(narrativeFolderRef, blob, {contentType:mimeType})
            console.log("Audio uploaded successfully.")

        } catch(err) {
            console.error(err.code, err.message)
        }
    }

    const sendData = async () => {
        try {
            await addDoc(dataCollectionRef, {
                userID: subID,
                relationship:topicPairs[index][0],
                topic:topicPairs[index][1],
                q1: q1,
                q2: q2,
                q3: q3,
                q4: q4,
                q5: q5,
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
    }

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
        };

    };

    // Progression across the experiment

    useEffect(()=>{
        if (completed === 4){
            pageEvent();
        }
    },[completed])

    const advIndex = () => {
        setIndex((prev) => prev +1)
    }

    const switchTopic = () => {
        if (index < 4) { //need to set this to a larger index based on full topic set
            advIndex();
        } else {
            setIndex(0);
        }
    }

    const handleNext = () => {
        if (audio) {
            setCompleted((prev)=>prev+1)
            sendAudio();
            sendData();
        }
        clearRadios();
        setAudio(null);
        setBlob(null);
        switchTopic();
    }

    const dropTopic = () =>{
        return
    }

    console.log("topic pairs:", topicPairs)

    return(
        <div>
            <p>Tell us about a time you experienced an interpersonal conflict with:
                a <strong>{topicPairs[index][0]}</strong> related to <strong>{topicPairs[index][1]}</strong>
            </p>
            <p><em><font color="#aaacad">to skip this category, please press the 'next' button below</font></em> </p>
            
            {!permission ? (
                        <button id="enable-audio-button" onClick={getMicPermission} >Enable Audio Permissions</button>
                ): null
                }

                {recordingStatus === "inactive" && permission && !audio ?(
                    <div>
                    <button id='start-recording-button' onClick={startRecording}>Start recording</button>
                    </div>
                    ): null
                }

                {recordingStatus === "recording" ? ( 
                    <div>
                    <button id='stop-recording-button' onClick={stopRecording}>Stop recording</button>
                    <p>recording in process...</p>
                    </div>
                    ): null
                }

                { audio ? (
                    <>
                        <div>
                        <audio src={audio} controls></audio>
                        </div>

                        <Questions q1={q1} q2={q2} q3={q3} q4={q4} q5={q5} setQ1={setQ1} setQ2={setQ2} setQ3={setQ3} setQ4={setQ4} setQ5={setQ5} />

                    </>
                    ): null
                }

            <div>
                <button id="next-button" onClick={handleNext}> next </button>
            </div>

            <div id="progress-tracker">
                <em>Recordings completed: {completed}/4 </em>
            </div>
            
        </div>
    );
};