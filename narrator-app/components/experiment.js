import React, {useState} from "react";

export const Experiment = ( { pageEvent, socialList, topicList } ) => {
    const [index, setIndex] = useState(0)

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
            <button onClick={switchTopic}> Next </button>
        </div>
    );
};