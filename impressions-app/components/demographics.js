import React, { useEffect, useState } from "react";
import { db } from "../config/firebase.js"
import { addDoc, collection } from 'firebase/firestore';
import { RadioGroup, FormControl, FormLabel, FormControlLabel, Radio, FormGroup, Checkbox } from "@mui/material";

export const Demographics = ( { pageEvent, subID } ) => {
    const [age, setAge] = useState(0)
    const [sex, setSex] = useState(0)
    const [gender, setGender] = useState(0)
    const [ethnic, setEthnic] = useState(0)
    const [race, setRace] = useState(0)
    const [edu, setEdu] = useState(0)

    const [completed, setCompleted] = useState(0)
    const [alert, setAlert] = useState(false)

    useEffect(()=>{
        if (age && sex && gender && ethnic && race && edu !== 0) {
            setCompleted(1)
        }

    },[age,sex,gender,ethnic,race,edu])

    //cloud research paramters
    const queryParameters = new URLSearchParams(window.location.search)
    const participantID = queryParameters.get("participantId")
    const assignmentID = queryParameters.get("assignmentId")
    const projectID = queryParameters.get("projectId")

    const dataCollectionRef = collection(db, "demographics")

    const sendData = async () => {
        try {
            await addDoc(dataCollectionRef, {
                userID: subID,
                age: age,
                sex: sex,
                gender: gender,
                ethnic: ethnic,
                race: race,
                edu: edu,
        });
        } catch (err) {
            console.error(err)
        }
    }

    const handleComplete = () => {
        sendData();
        pageEvent();
    }

    useEffect(()=>{
        if (age >= 100) {
            setAlert (true);
        } else if (age < 18) {
            setAlert (true)
        } else if (age.length >= 3) {
            setAlert(true) 
        } else if (age.length <= 1) {
            setAlert(true)
        } else {
            setAlert(false)
        }
    
    }, [age])

    return(
        <>
        <h1>Demographics Survey</h1>
        <div className="demo-survey">

            <FormGroup id="demo-align">
                <FormLabel id="demo-radio-buttons-group-label">Please indicate your age:</FormLabel>
                <input type="number" min="18" max="100" minlength="2" maxlength="2" value={age} onChange={(e) => setAge(e.target.value)}></input>
                {alert &&
                    <>
                    <span className="subtext">please enter a valid age.</span>
                    </>
                }
            </FormGroup>
            
            <FormGroup id="demo-align" className="radio-group" value={race} onChange={e => setRace(e.target.value)}>
                <FormLabel id="demo-radio-buttons-group-label">Please indicate your race. Select all that apply. </FormLabel>
                <FormControlLabel control={<Checkbox />} value="1" label="American Indian or Alaska Native" />
                <FormControlLabel control={<Checkbox />} value="2" label="Black or African American" />
                <FormControlLabel control={<Checkbox />} value="3" label="South Asian" />
                <FormControlLabel control={<Checkbox />} value="4" label="South East Asain" />
                <FormControlLabel control={<Checkbox />} value="5" label="East Asain" />
                <FormControlLabel control={<Checkbox />} value="6" label="Middle Eastern/North African" />
                <FormControlLabel control={<Checkbox />} value="7" label="Native Hawaiian or Other Pacific Islander" />
                <FormControlLabel control={<Checkbox />} value="8" label="White" />
                <FormControlLabel control={<Checkbox />} value="9" label="Prefer not to answer" />
                <FormControlLabel control={<Checkbox />} value="10" label="Other" />
            </FormGroup>

            <FormControl id="demo-align">
                    <FormLabel id="demo-radio-buttons-group-label">Please indicate your ethnicity.</FormLabel>
                        <RadioGroup id="demographics-id" className="radio-group" aria-labelledby="demo-radio-buttons-group-label" value={ethnic} onChange={e => setEthnic(e.target.value)} >
                            <FormControlLabel value="1" label="Hispanic or Latino" control={<Radio />} labelPlacement='right'/>
                            <FormControlLabel value="2" label="Not Hispanic or Latino" control={<Radio />} labelPlacement='right'/>
                        </RadioGroup>
            </FormControl>

            <FormControl id="demo-align">
                    <FormLabel id="demo-radio-buttons-group-label">Please indicate your gender.</FormLabel>
                        <RadioGroup id="demographics-id" className="radio-group" aria-labelledby="demo-radio-buttons-group-label" value={gender} onChange={e => setGender(e.target.value)} >
                            <FormControlLabel value="1" label="Man" control={<Radio />} labelPlacement='right'/>
                            <FormControlLabel value="2" label="Woman" control={<Radio />} labelPlacement='right'/>
                            <FormControlLabel value="3" label="Non-binary" control={<Radio />} labelPlacement='right'/>
                            <FormControlLabel value="4" label="Prefer not to answer" control={<Radio />} labelPlacement='right'/>                    
                        </RadioGroup>
            </FormControl>

            <FormControl id="demo-align">
                    <FormLabel id="demo-radio-buttons-group-label">Please indicate your sex at  birth.</FormLabel>
                        <RadioGroup id="demographics-id" className="radio-group" aria-labelledby="demo-radio-buttons-group-label" value={sex} onChange={e => setSex(e.target.value)} >
                            <FormControlLabel value="1" label="Male" control={<Radio />} labelPlacement='right'/>
                            <FormControlLabel value="2" label="Female" control={<Radio />} labelPlacement='right'/>
                            <FormControlLabel value="3" label="Prefer not to answer" control={<Radio />} labelPlacement='right'/>                    
                        </RadioGroup>
            </FormControl>

            <FormControl id="demo-align">
                    <FormLabel id="demo-radio-buttons-group-label">What is the highest level of education you have completed?</FormLabel>
                        <RadioGroup id="demographics-id" className="radio-group" column aria-labelledby="demo-radio-buttons-group-label" value={edu} onChange={e => setEdu(e.target.value)} >
                            <FormControlLabel value="1" label="Less than high school credential" control={<Radio />} labelPlacement='right'/>
                            <FormControlLabel value="2" label="High school credential" control={<Radio />} labelPlacement='right'/>
                            <FormControlLabel value="3" label="Some post-high-school, no bachelor's degree" control={<Radio />} labelPlacement='right'/>
                            <FormControlLabel value="4" label="Bachelor's degree" control={<Radio />} labelPlacement='right'/>
                            <FormControlLabel value="5" label="Graduate Degree" control={<Radio />} labelPlacement='right'/>
                            <FormControlLabel value="6" label="Prefer not to answer" control={<Radio />} labelPlacement='right'/>              
                        </RadioGroup>
            </FormControl>
            </div>

            <div>

            { completed === 0 &&
                <>
                    <p>Please answer all the questions above to proceed.</p>
                </>
            }

            { completed === 1 && !alert && 
                <>
                    <button className="advance-button" onClick={handleComplete}>submit</button>
                </>
            }
            </div>


        </>
    );
};