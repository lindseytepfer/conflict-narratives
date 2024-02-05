import React, {useState} from "react";
import { v4 as uuid } from 'uuid';

export const Intro = ( { pageEvent, setSubID } ) => {

    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(true);
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
            {!clicked && 
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
                    interpersonal conflict with a <strong>romantic partner related to health</strong>.
                    If you choose to share a story that fits with this category, you will press a button
                    to <strong>start</strong> a recording and press <strong>stop</strong> when you are
                    done. 
                    <br/><br/>

                    If you don't want to answer this particular question, you can choose to skip it by 
                    pressing a <strong>'skip'</strong> button to generate a new topic category. 
                    <br/><br/>
                    </p> 
                        
                    <div>
                        <button className="advance-button" onClick={handleClick}>makes sense!</button>
                    </div>
                </div>            
            </>
            }

            {clicked && 
            <>
                <div className="container">
                    <h1>Conflict Narratives Study</h1>
                    <h2>Instructions</h2>
                    <p> 
                        <span id="warning-text">Critically, it is extremely important that you do not share any sensitive
                        information, such as personally identifying information or stories involving violence.</span> 
                        <br/><br/>

                        These stories will be converted to text and presented in a follow-up study for other people to 
                        read, so it is essential that you talk about these conflicts in general terms. 
                        <br/><br/>

                        After you finish each recording, you will be asked <strong>five</strong> follow-up questions about 
                        that specific scenario. For example, we'll ask how recent this conflict is, if you
                        have told anyone about the situation before, and, hypothetically, how you would want a 
                        listener to respond if you were to share your experience. 
                        <br/><br/>

                        And that's it! Once you have shared four interpersonal conflict stories, and answered
                        their corresponding follow-up questions, you will be redirected to a page to access the
                        completion/payment code. 
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