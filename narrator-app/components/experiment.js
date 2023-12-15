import React, {useState} from "react";
import { AudioRecorder } from './audioRecorder.js';

export const Experiment = ( { pageEvent, socialList, topicList, stream } ) => {
    const [index, setIndex] = useState(0)
    const [completed, setCompleted] = useState(0)

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

    return(
        <div>
            <p>Tell us about a time you experienced an interpersonal conflict with:
                a <strong>{socialList[index]}</strong> related to <strong>{topicList[index]}</strong>
            </p>
            
            <AudioRecorder stream={stream} />

            <div>
                <button id="next-button" onClick={switchTopic}> next </button>
            </div>

            <div id="progress-tracker">
                <em>Recordings completed: {completed}/4 </em>
            </div>
            
        </div>
    );
};