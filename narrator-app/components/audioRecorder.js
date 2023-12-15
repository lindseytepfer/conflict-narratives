import React, {useState, useRef} from "react";

const mimeType = "audio/webm";

export const AudioRecorder = ( stream ) => {

    const [recordingStatus, setRecordingStatus] = useState("inactive");
    const [audioClip, setAudioClip] = useState([]);
    const [audio, setAudio] = useState(null);
    const mediaRecorder = useRef(null);

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

      console.log("audioRecorder.js stream data:", stream)

    return(
        <>
            <div>
                {recordingStatus === "inactive" ? (
                    <button onClick={startRecording}>Start recording</button>
                    ): null
                }

                {recordingStatus === "recording" ? ( 
                    <button onClick={stopRecording}>Stop recording</button>
                    ): null
                }

                { audio ? (
                    <audio src={audio} controls></audio>
                    ): null
                }
            </div>
        </>
    );
};