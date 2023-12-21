import React, {useState, useEffect, useRef} from "react";

const mimeType = "audio/webm";

export const Experiment = ( { pageEvent, socialList, topicList } ) => {
    const [index, setIndex] = useState(0)
    const [completed, setCompleted] = useState(0)

    const [permission, setPermission] = useState(false);
    const [recordingStatus, setRecordingStatus] = useState("inactive");
    const [audioClip, setAudioClip] = useState([]);
    const [audio, setAudio] = useState(null);
    const [stream, setStream] = useState(null);
    const mediaRecorder = useRef(null);

    const advIndex = () => {
        setIndex((prev) => prev +1)
    }

    const switchTopic = () => {
        if (index < 4) {
            advIndex();
        } else {
            setIndex(0);
        }
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
        console.log("media variable:", media)
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

      const stopRecording = () => {
        setRecordingStatus("inactive");

        mediaRecorder.current.stop();
        mediaRecorder.current.onstop = () => {

           const audioBlob = new Blob(audioClip, { type: mimeType });
           const audioUrl = URL.createObjectURL(audioBlob);
           setAudio(audioUrl);
           setAudioClip([]);
        };
      };

      const sendData = () => {
        // holding this for sending audio files to fireBase
      }
    

      const handleAudio = () => {
          if (audio) {
            // holding this for adding post-narrative 
            // questions
          }
      }

    return(
        <div>
            <p>Tell us about a time you experienced an interpersonal conflict with:
                a <strong>{socialList[index]}</strong> related to <strong>{topicList[index]}</strong>
            </p>
            
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
                    <div>
                    <p>Thank you for sharing this narrative. 
                        Please answer a few additional questions about this scenarioin particular:</p>
                    <p>How recently have you experienced this conflict?</p>
                    <p>Have you ever told someone about this conflict?</p>
                    <p>If you were sharing this story with someone, would you 
                        want the listener to give you their advice on how to resolve it?</p>
                    <p>If you were sharing this story with someone, would you 
                    want the listener to validate your emotions?</p>
                    </div>
                    </>
                    ): null
                }

            <div>
                <button id="next-button" onClick={switchTopic}> next </button>
            </div>

            <div id="progress-tracker">
                <em>Recordings completed: {completed}/4 </em>
            </div>
            
        </div>
    );
};