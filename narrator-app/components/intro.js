import React, {useState} from "react";
import { v4 as uuid } from 'uuid';

export const Intro = ( { pageEvent, subID, setSubID, stream } ) => {
    const [permission, setPermission] = useState(false);

    const setID = () => {
        const x = uuid();
        setSubID(x);
      }

    const advIntro = () => {
          setID();
          pageEvent();
      }

    const getMicPermission = async () => {
    if ("MediaRecorder" in window) {
        try {
            const streamData = await navigator.mediaDevices.getUserMedia({
                audio: true,
                video: false,
            });
            setPermission(true);
            stream.current = streamData;
        } catch (err) {
            alert(err.message)
        }
    } else {
        alert("The MediaRecorder API is not supported in your broswer.")
        }
    }
    console.log("Intro.js stream data:", stream)
    return(
        <div className="outer-div">
                <div className='inner-div'>
                    <h1>Conflict Narratives Study</h1>
                    <p> 
                        In this experiment, you will record yourself talking about various categories
                        of interpersonal conflict experiences that you have had. You will be able to select
                        4 topics to narrate out of 8 potential topics presented to you. After you finish
                        recording, you will then be asked several questions about that interpersonal
                        conflict scenario, such as how recently you've experienced, if you have told this
                        story before, and, hypothetically, if you were to tell someone this story, how you
                        would want that person to respond.
                    </p> 

                    <div id="enable-audio-div">
                        <p>Before we can proceed, please enable audio + microphone permissions to allow this
                        experiment to record your narratives:</p>

                        <button id="enable-audio-button" onClick={getMicPermission}>Enable Audio Permissions</button>
                    </div>
                        
                    { permission ? ( 
                        <div>
                            <p><strong>Permission granted.</strong><br/>
                            When you are ready to begin, please press the button below:</p>
                            <button id="start-study-button" onClick={advIntro}>start</button>
                        </div>

                        ): null
                    }
            </div>
        </div>
    );
};