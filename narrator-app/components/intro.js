import React, {useState} from "react";
import { v4 as uuid } from 'uuid';

export const Intro = ( { pageEvent, setSubID } ) => {

    const setID = () => {
        const x = uuid();
        setSubID(x);
      }

    const advIntro = () => {
          setID();
          pageEvent();
      }

    return(
        <div className="outer-div">
                <div className='inner-div'>
                    <h1>Conflict Narratives Study</h1>
                    <p> 
                        In this experiment, you will record yourself talking about interpersonal
                         conflicts that you have experienced. 
                    </p>
                    <p> 
                        We will present several topics to choose from; out of these categories, you
                        only need to select <strong>four</strong> stories to share to complete the study.  
                    </p>
                    <p>  
                        After you finish each recording, you will be asked five follow-up questions about that 
                        specific scenario. For example, we'll ask how recent this conflict is, if you
                        have told anyone about the situation before, and, hypothetically, how you would want a 
                        listener to respond if you were to share your experience.
                    </p> 
                        
                    <div>
                        <p>When you are ready to begin, please press the button below:</p>
                        <button id="start-study-button" onClick={advIntro}>start</button>
                    </div>
                </div>
        </div>
    );
};