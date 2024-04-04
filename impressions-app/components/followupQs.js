import React, {useState, useEffect} from "react";
import { db } from "../config/firebase.js"
import { addDoc, collection } from 'firebase/firestore';
import { RadioGroup, FormControl, FormLabel, FormControlLabel, Radio } from "@mui/material";


export const FollowupQs = ( { subID, topic, pageEvent } ) => {

    //cloud research paramters
    const queryParameters = new URLSearchParams(window.location.search)
    const participantID = queryParameters.get("participantId")
    const assignmentID = queryParameters.get("assignmentId")
    const projectID = queryParameters.get("projectId")
    
    // narrative follow-up question states:
    const [q1, setQ1] = useState(0);
    const [q2, setQ2] = useState(0);
    const [q3, setQ3] = useState(0);
    const [q4, setQ4] = useState(0);
    const [q5, setQ5] = useState(0);
    const [completed, setCompleted] = useState(false);

    useEffect(()=>{
        if (q1 && q2 && q3 && q4 && q5 !== 0) {
            setCompleted(true)
        }

    },[q1,q2,q3,q4,q5])

    const dataCollectionRef = collection(db, "impressions")

    // Upload follow-up questions data to firebase
    const sendData = async () => {
        try {
            await addDoc(dataCollectionRef, {
                userID: subID,
                connectID: participantID,
                assignmentID: assignmentID,
                projectID: projectID,
                topic:topic,
                q1: q1,
                q2: q2,
                q3: q3,
                q4: q4,
                q5: q5,
        });
        } catch (err) {
            console.error(err)
        }
    }

    const handleComplete = () => {
        sendData();
        pageEvent();
    }

    return(
    <>
        <div className="block-container">
            <p><strong>Thank you</strong> for sharing your thoughts about that story.
            Here are a few more follow-up questions:</p>
        </div>

        <div className="radio-div">
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Have you ever experienced a conflict similar to this? </FormLabel>
                    <RadioGroup className="radio-group" row aria-labelledby="demo-radio-buttons-group-label" value={q1} onChange={e => setQ1(e.target.value)} >
                        <FormLabel id="sidelabel" labelplacement="start">No </FormLabel>
                        <FormControlLabel value="No" control={<Radio />} labelPlacement='bottom'/>
                        <FormControlLabel value="Yes" control={<Radio />} labelPlacement='bottom'/>
                        <FormLabel id="sidelabel" labelplacement="end">Yes</FormLabel>
                    </RadioGroup>
            </FormControl>
            <hr style={{margin: "0rem", width: "80%", border: ".1px solid #bee6cf" }}/>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">How curious were you about that story? </FormLabel>
                    <RadioGroup className="radio-group" row aria-labelledby="demo-radio-buttons-group-label" value={q2} onChange={e => setQ2(e.target.value)} >
                        <FormLabel id="sidelabel" labelplacement="start">Very curiou</FormLabel>
                        <FormControlLabel value="1" control={<Radio />} labelPlacement='bottom'/>
                        <FormControlLabel value="2" control={<Radio />} labelPlacement='bottom'/>
                        <FormControlLabel value="3" control={<Radio />} labelPlacement='bottom'/>
                        <FormControlLabel value="4" label="Months ago" sx={{fontStyle:{color: '#000'}}} control={<Radio />} labelPlacement='bottom'/>
                        <FormControlLabel value="5" control={<Radio />} labelPlacement='bottom'/>
                        <FormControlLabel value="6" control={<Radio />} labelPlacement='bottom'/>
                        <FormControlLabel value="7" control={<Radio />} labelPlacement='bottom'/>
                        <FormLabel id="sidelabel" labelplacement="end">Not curious at all</FormLabel>
                    </RadioGroup>
            </FormControl>
            <hr style={{margin: "0rem", width: "80%", border: ".1px solid #bee6cf" }}/>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">How much are you on the narrators side relative to the other parties in the conflict?</FormLabel>
                    <RadioGroup className="radio-group" row aria-labelledby="demo-radio-buttons-group-label" value={q3} onChange={e => setQ3(e.target.value)} >
                        <FormLabel id="sidelabel" labelplacement="start">Very much</FormLabel>
                        <FormControlLabel value="1" control={<Radio />} labelPlacement='bottom'/>
                        <FormControlLabel value="2" control={<Radio />} labelPlacement='bottom'/>
                        <FormControlLabel value="3" control={<Radio />} labelPlacement='bottom'/>
                        <FormControlLabel value="4" label="Months ago" sx={{fontStyle:{color: '#000'}}} control={<Radio />} labelPlacement='bottom'/>
                        <FormControlLabel value="5" control={<Radio />} labelPlacement='bottom'/>
                        <FormControlLabel value="6" control={<Radio />} labelPlacement='bottom'/>
                        <FormControlLabel value="7" control={<Radio />} labelPlacement='bottom'/>
                        <FormLabel id="sidelabel" labelplacement="end">Not much at all</FormLabel>
                    </RadioGroup>
            </FormControl>
            <hr style={{margin: "0rem", width: "80%", border: ".1px solid #bee6cf" }}/>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">How much do you think this person wants feedback about this conflict?</FormLabel>
                    <RadioGroup className="radio-group" row aria-labelledby="demo-radio-buttons-group-label" value={q4} onChange={e => setQ4(e.target.value)} >
                        <FormLabel id="sidelabel" labelplacement="start">Very open</FormLabel>
                        <FormControlLabel value="1" control={<Radio />} labelPlacement='bottom'/>
                        <FormControlLabel value="2" control={<Radio />} labelPlacement='bottom'/>
                        <FormControlLabel value="3" control={<Radio />} labelPlacement='bottom'/>
                        <FormControlLabel value="4" label="Months ago" sx={{fontStyle:{color: '#000'}}} control={<Radio />} labelPlacement='bottom'/>
                        <FormControlLabel value="5" control={<Radio />} labelPlacement='bottom'/>
                        <FormControlLabel value="6" control={<Radio />} labelPlacement='bottom'/>
                        <FormControlLabel value="7" control={<Radio />} labelPlacement='bottom'/>
                        <FormLabel id="sidelabel" labelplacement="end">Not open at all</FormLabel>
                    </RadioGroup>
            </FormControl>
            <hr style={{margin: "0rem", width: "80%", border: ".1px solid #bee6cf" }}/>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">How upset do you think this person would be if they were critisized about their behavior in this conflict?</FormLabel>
                    <RadioGroup className="radio-group" row aria-labelledby="demo-radio-buttons-group-label" value={q5} onChange={e => setQ5(e.target.value)} >
                        <FormLabel id="sidelabel" labelplacement="start">Very open</FormLabel>
                        <FormControlLabel value="1" control={<Radio />} labelPlacement='bottom'/>
                        <FormControlLabel value="2" control={<Radio />} labelPlacement='bottom'/>
                        <FormControlLabel value="3" control={<Radio />} labelPlacement='bottom'/>
                        <FormControlLabel value="4" label="Months ago" sx={{fontStyle:{color: '#000'}}} control={<Radio />} labelPlacement='bottom'/>
                        <FormControlLabel value="5" control={<Radio />} labelPlacement='bottom'/>
                        <FormControlLabel value="6" control={<Radio />} labelPlacement='bottom'/>
                        <FormControlLabel value="7" control={<Radio />} labelPlacement='bottom'/>
                        <FormLabel id="sidelabel" labelplacement="end">Not open at all</FormLabel>
                    </RadioGroup>
            </FormControl>

            { completed &&
                <>
                <button className="advance-button" onClick={handleComplete}>next: demographics</button>
                </>
            }

        </div>
    </>
    )
};