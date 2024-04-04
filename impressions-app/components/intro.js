import React, {useState} from "react";
import { v4 as uuid } from 'uuid';

export const Intro = ( { pageEvent, setSubID } ) => {

    const [part, setPart] = useState(1)

    const handleClick = () => {
        setPart((prev) => prev + 1);
    }

    const setID = () => {
        const x = uuid();
        setSubID(x);
      }

    const advIntro = () => {
          setID();
          pageEvent();
      }

    return (
        <>
            {part===1 && 
            <>
                <div className="intro">
                    <h1>Conflict Impressions Study</h1>
                    <h2>Instructions: page 1/3</h2>
                    <p> 
                    A few months ago, we asked Cloud Research participants to record themselves while 
                    they shared different stories about interpersonal conflicts that they had experienced.
                    <br/><br/>

                    In this study, we're asking you to take a look at <strong>one</strong> of these stories, 
                    and then record yourself sharing your impressions of the conflict story. 
                    More specifically, we'll ask you to record yourself talking about <strong>four</strong> things:<br/><br/>

                    1) A summary/recap of what the story was about; <br/><br/>
                    2) Your opinion/evaluation of what happened in the story, such as what you think
                    about the storyteller as well as the others in the story;<br/><br/>
                    3) What information you think might be missing from the story--or, what questions would 
                    you want to ask to fully understand the situation? <br/><br/>
                    4) How you imagine you would respond to the storyteller if, <em>hypothetically</em>, they  
                    were sharing this conflict with you in real life.<br/>
                    <br/><br/>
                    </p>

                    <button className="advance-button" onClick={handleClick}>continue</button>

                </div>            
            </>
            }

            {part === 2 && 
            <>
                <div className="container">
                    <h1>Conflict Impressions Study</h1>
                    <h2>Instructions: page 2/3</h2>
                    <p> 
                        There are <strong>two</strong> key things to know about your recordings:
                        <br/><br/>

                        <strong>One,</strong><span id="warning-text"> it is extremely important that you do not share any sensitive
                        information, such as personally identifying information or references to violence.</span> 
                        <br/><br/>

                        <strong>Two</strong>, the recordings should be at least a minute long but not longer than five minutes; each recording 
                        will be manually inspected to ensure that the recordings are relevant to the task. 
                        <strong>Participants who submit empty or inappropriate audio recordings will be rejected.</strong>
                    </p> 

                    <button className="advance-button" onClick={handleClick}>I understand</button>

                </div>
            </>
            }
            {part === 3 && 
            <>
                <div className="container">
                    <h1>Conflict Impressions Study</h1>
                    <h2>Instructions: page 3/3</h2>
                    <p> 
                        After you finish each recording, you will be asked <strong>five</strong> follow-up questions:
                        1. whether you've experienced a similar interpersonal conflict before, 2. how curious you were about
                        the story itself, 3. whether you think the storyteller would want feedback, 4. how much you are on 
                        the storyteller's side, and 5. how upset you think the storyteller would be if you criticized them 
                        about their behavior during the conflict. 
                        <br/><br/>

                        After these questions, you will be asked to fill out a brief demographic survey. 
                        <br/><br/>

                        Upon completion, you will be redirected to the Cloud Research page which records your participation, and
                        sets it to a 'pending' status, until it is manually approved by the researcher. <strong>This step will take 
                        up to two weeks, as all audio files must be initially screened for empty or inappropriate recordings.</strong>
                        <br/><br/>

                        <strong>
                            PLEASE DO NOT REFRESH YOUR BROWSER OR 
                            CLICK THE BACK BUTTON DURING THE EXPERIMENT.
                        </strong>
                    </p> 
                        
                    <div>
                        <p>When you are ready to begin, please press the button below:</p>
                        <button className="advance-button" onClick={advIntro}>I'm ready to start!</button>
                    </div>
                </div>
            </>
            }
        </>
    )
};