import React, {useState} from "react";
import { v4 as uuid } from 'uuid';

export const Intro = ( { pageEvent, subID, setSubID } ) => {

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
                        In this experiment, you will record yourself talking about various categories
                        of interpersonal conflict experiences that you have had. You will be able to select
                        4 topics to narrate out of 8 potential topics presented to you. 
                    </p>
                    <p>  
                        After you finish recording, you will be asked several questions about that 
                        interpersonal conflict scenario, such as how recently you've experienced it, if you
                        have told this story before, and, hypothetically, if you were to tell someone this
                        story, how you would want that person to respond.
                    </p> 
                        
                    <div>
                        <p>When you are ready to begin, please press the button below:</p>
                        <button id="start-study-button" onClick={advIntro}>start</button>
                    </div>
                </div>
        </div>
    );
};