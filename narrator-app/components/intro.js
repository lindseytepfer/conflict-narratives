import React from "react";
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
        <div>
        <h1>Welcome!</h1>
        <p> 
            In this experiment, you will record yourself talking about various categories
            of interpersonal conflict experiences that you have had. You will be able to select
            4 topics to narrate out of 8 potential topics presented to you. After you finish
            recording, you will then be asked several questions about that interpersonal
            conflict scenario, such as how recently you've experienced, if you have told this
            story before, and, hypothetically, if you were to tell someone this story, how you
            would want that person to respond. 

            <br/><br />
            When you're ready to begin, please press the 'start' button below. 
        </p>
        <button onClick={advIntro}>Start</button>
        </div>
    );
};