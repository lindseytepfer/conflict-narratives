import React from "react";
import { RadioGroup, FormControl, FormLabel, FormControlLabel, Radio } from "@mui/material";


export const Questions = ( { q1, setQ1, q2, setQ2, q3, setQ3, q4, setQ4, q5, setQ5 } ) => {

    return(
    <>
        <div>
            <p>Thank you for sharing this narrative. 
            Please answer a few additional questions about this particular scenario:</p>
        </div>
        
        <div className="radio-div">
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Have you ever told someone about this conflict? </FormLabel>
                    <RadioGroup className="radio-group" row aria-labelledby="demo-radio-buttons-group-label" value={q1} onChange={e => setQ1(e.target.value)} >
                        <FormLabel id="sidelabel" labelplacement="start">Yes </FormLabel>
                        <FormControlLabel value="1" control={<Radio />} labelPlacement='bottom'/>
                        <FormControlLabel value="2" control={<Radio />} labelPlacement='bottom'/>
                        <FormLabel id="sidelabel" labelplacement="end">No</FormLabel>
                    </RadioGroup>
            </FormControl>

            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Is this a recent conflict?</FormLabel>
                    <RadioGroup className="radio-group" row aria-labelledby="demo-radio-buttons-group-label" value={q2} onChange={e => setQ2(e.target.value)} >
                        <FormLabel id="sidelabel" labelplacement="start">Not recent at all</FormLabel>
                        <FormControlLabel value="1" control={<Radio />} label="1" labelPlacement='bottom'/>
                        <FormControlLabel value="2" control={<Radio />} label="2" labelPlacement='bottom'/>
                        <FormControlLabel value="3" control={<Radio />} label="3" labelPlacement='bottom'/>
                        <FormControlLabel value="4" control={<Radio />} label="4" labelPlacement='bottom'/>
                        <FormControlLabel value="5" control={<Radio />} label="5" labelPlacement='bottom'/>
                        <FormControlLabel value="6" control={<Radio />} label="6" labelPlacement='bottom'/>
                        <FormControlLabel value="7" control={<Radio />} label="7" labelPlacement='bottom'/>
                        <FormLabel id="sidelabel" labelplacement="end">Very recent</FormLabel>
                    </RadioGroup>
            </FormControl>

            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">If you were sharing this story with someone, <br/>would you 
                            want the listener to <strong>give you their advice on how to resolve it</strong>? </FormLabel>
                    <RadioGroup className="radio-group" row aria-labelledby="demo-radio-buttons-group-label" value={q3} onChange={e => setQ3(e.target.value)} >
                        <FormLabel id="sidelabel" labelplacement="start">Not at all </FormLabel>
                        <FormControlLabel value="1" control={<Radio />} label="1" labelPlacement='bottom'/>
                        <FormControlLabel value="2" control={<Radio />} label="2" labelPlacement='bottom'/>
                        <FormControlLabel value="3" control={<Radio />} label="3" labelPlacement='bottom'/>
                        <FormControlLabel value="4" control={<Radio />} label="4" labelPlacement='bottom'/>
                        <FormControlLabel value="5" control={<Radio />} label="5" labelPlacement='bottom'/>
                        <FormControlLabel value="6" control={<Radio />} label="6" labelPlacement='bottom'/>
                        <FormControlLabel value="7" control={<Radio />} label="7" labelPlacement='bottom'/>
                        <FormLabel id="sidelabel" labelplacement="end">Very much</FormLabel>
                    </RadioGroup>
            </FormControl>

            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">How much would you want the listener to <strong>be on your side about the conflict</strong>?  </FormLabel>
                    <RadioGroup className="radio-group" row aria-labelledby="demo-radio-buttons-group-label" value={q4} onChange={e => setQ4(e.target.value)} >
                        <FormLabel id="sidelabel" labelplacement="start">Not at all </FormLabel>
                        <FormControlLabel value="1" control={<Radio />} label="1" labelPlacement='bottom'/>
                        <FormControlLabel value="2" control={<Radio />} label="2" labelPlacement='bottom'/>
                        <FormControlLabel value="3" control={<Radio />} label="3" labelPlacement='bottom'/>
                        <FormControlLabel value="4" control={<Radio />} label="4" labelPlacement='bottom'/>
                        <FormControlLabel value="5" control={<Radio />} label="5" labelPlacement='bottom'/>
                        <FormControlLabel value="6" control={<Radio />} label="6" labelPlacement='bottom'/>
                        <FormControlLabel value="7" control={<Radio />} label="7" labelPlacement='bottom'/>
                        <FormLabel id="sidelabel" labelplacement="end">Very much</FormLabel>
                    </RadioGroup>
            </FormControl>

            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">How upset would you be if a listener <strong>criticized you for your behavior in this conflict</strong>?</FormLabel>
                    <RadioGroup className="radio-group" row aria-labelledby="demo-radio-buttons-group-label" value={q5} onChange={e => setQ5(e.target.value)} >
                        <FormLabel id="sidelabel" labelplacement="start">Not at all upset </FormLabel>
                        <FormControlLabel value="1" control={<Radio />} label="1" labelPlacement='bottom'/>
                        <FormControlLabel value="2" control={<Radio />} label="2" labelPlacement='bottom'/>
                        <FormControlLabel value="3" control={<Radio />} label="3" labelPlacement='bottom'/>
                        <FormControlLabel value="4" control={<Radio />} label="4" labelPlacement='bottom'/>
                        <FormControlLabel value="5" control={<Radio />} label="5" labelPlacement='bottom'/>
                        <FormControlLabel value="6" control={<Radio />} label="6" labelPlacement='bottom'/>
                        <FormControlLabel value="7" control={<Radio />} label="7" labelPlacement='bottom'/>
                        <FormLabel id="sidelabel" labelplacement="end">Very upset</FormLabel>
                    </RadioGroup>
            </FormControl>
        </div>
    </>
    )
};