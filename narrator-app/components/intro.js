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
                <div className="container">
                    <h1>Conflict Narratives Study</h1>
                    <h2>Instructions</h2>
                    <p> 
                    In this experiment, you will record yourself talking about interpersonal
                    conflicts that you have experienced. 

                    We will present several topics to choose from; out of these categories, you
                    only need to select <strong>four</strong> stories to share to complete the study.  
                    <br/><br/>

                    For example, one of the questions we ask is whether you have experienced an
                    interpersonal conflict with a <strong>romantic partner</strong> related to <strong>health</strong>.
                    If you choose to share a story that fits with this category, you will press a button
                    to <strong>start</strong> a recording and press <strong>end</strong> when you are
                    done. 
                    <br/><br/>

                    If you don't want to answer this particular question, you can choose to skip it by 
                    pressing a <strong>'skip'</strong> button to generate a new topic category. 
                    </p> 
                        
                    <div>
                        <button className="advance-button" onClick={handleClick}>continue</button>
                    </div>
                </div>            
            </>
            }

            {part === 2 && 
            <>
                <div className="container">
                    <h1>Conflict Narratives Study</h1>
                    <h2>Instructions</h2>
                    <p> 

                        There are <strong>three</strong> key things to know about these recordings:
                        <br/><br/>

                        <strong>First,</strong><span id="warning-text"> it is extremely important that you do not share any sensitive
                        information, such as personally identifying information or stories involving violence.</span> 
                        <br/><br/>

                        <strong>Second,</strong> these stories will be converted to text and presented in a follow-up study for other people to 
                        read, so it is essential that you talk about these conflicts in general terms. 
                        <br/><br/>

                        <strong>Third</strong>, the recordings should be at least a minute long but not longer than five minutes; each recording 
                        will be manually inspected to ensure that the recordings contain stories about interpersonal conflicts. 
                        Participants who submit empty or inappropriate audio recordings will be rejected.
                    </p> 
                        
                    <div>
                        <button className="advance-button" onClick={handleClick}>I understand</button>
                    </div>
                </div>
            </>
            }
            {part === 3 && 
            <>
                <div className="container">
                    <h1>Conflict Narratives Study</h1>
                    <h2>Instructions</h2>
                    <p> 
                        After you finish each recording, you will be asked <strong>five</strong> follow-up questions.
                        For example, we'll ask how recent this conflict is, if you have told anyone about the situation 
                        before, and, hypothetically, how you would want a listener to respond if you were to share your experience. 
                        <br/><br/>

                        Once you have shared four interpersonal conflict stories, you will be asked to fill out a brief
                        demographic survey. Upon completion, you will see a debrief page that will redirect you to
                        access your Cloud Research completion/payment code. 
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