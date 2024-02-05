import React, { useState } from "react";
import { db, storage } from "../config/firebase.js"
import { addDoc, collection } from 'firebase/firestore';
import { ref, uploadBytes } from "firebase/storage";

export const Demographics = ( { pageEvent } ) => {
    const [age, setAge] = useState(0)
    const [gender, setGender] = useState(0)
    const [sex, setSex] = useState(0)
    const [race, setRace] = useState(0)
    const [edu, setEdu] = useState(0)

    const dataCollectionRef = collection(db, "responses")

    const sendData = async () => {
        try {
            await addDoc(dataCollectionRef, {
                age: age,
                gender: gender,
                sex: sex,
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


    return(
        <div className="container">
        <p>Thank you for completing this study.</p>

        <button onClick={handleComplete}>submit</button>
        </div>
    );
};