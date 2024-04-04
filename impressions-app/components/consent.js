import React from "react";

export const Consent = ( { pageEvent } ) => {

    return(
        <div className="consent-form">
            <h1>CONSENT TO TAKE PART IN RESEARCH</h1>
            <h2>Dartmouth College</h2>
            <h3>Study Title: Online behavioral studies of interpersonal conflict</h3>
            <h4>Principal Investigator: Mark Allen Thornton</h4>
            <p className="body-text"> 
                <strong>You are being asked to take part in a research study.  Taking part in research is voluntary. </strong>
                It is your choice whether or not to participate in this research.  If you choose to participate, you may change your mind 
                and leave the study at any time.  Refusal to participate or stopping your participation will involve no penalty or loss of 
                benefits to which you are otherwise entitled. If at any time before the completion of the study you close the experiment 
                window or tab, this will be treated as withdrawn consent and any data you have provided will be discarded.
                <br/><br/>

                <strong>Study Summary: </strong>
                This study aims to understand how people interpret the interpersonal conflicts of others. Moreover, it asks what 
                questions people have about others’ conflicts, what emotions the narrator likely experienced during that conflict, 
                and how they would respond if they were listening to the conflict in person. The risk of participating in this 
                study is minimal, no greater than what you would experience in the course of everyday internet use for an equivalent 
                period of time. Your participation in this study is completely voluntary. You many choose not to participate. You 
                may withdraw at any time during the study without penalty by simply closing this tab or window of your web browser.
                <br/><br/>

                <strong>What is the purpose of this study? </strong> 
                The purpose of the study is to examine how people narrate other peoples’ interpersonal conflicts, 
                predict the emotions of people in conflict, and provide feedback after reading about an interpersonal conflict.
                <br/><br/>

                <strong>Will you benefit from taking part in this study? </strong> 
                You will not personally benefit from being in this research study.
                <br/><br/>

                <strong>What does this study involve? </strong> 
                Your participation in this study will take approximately 30 minutes. During this time, you will read a narrative 
                about an interpersonal conflict that someone else has experienced. After reading, you will be asked to first 
                record yourself narrating a retelling of a conflict, followed by an interpretation of the conflict. After these 
                narrations, you will also be asked to record yourself narrating the questions you have about the conflict, as well 
                as the feedback you might give to this person, if this were an in-person interaction. The audio recordings will 
                allow us to understand how people share information in different ways (e.g., speech tone and content). 
                <br/><br/>
                
                Afterwards, you will also be asked to predict which emotions the narrator likely experienced during the conflict, 
                how they might want a listener to respond, and whether you have personally experienced this type of conflict before. 
                <br/><br/>

                <strong>What are the risks involved with being enrolled in this study? </strong> 
                If you choose to participate, we urge you to avoid discussing potentially sensitive personal information when 
                recording audio of yourself. Moreover, we ask that you do not share any information involving violent 
                interpersonal conflict, such as abuse or assault.
                <br/><br/>

                <strong>How will your privacy be protected? </strong>
                The data we collect from this study will not be identified by any names, email addresses, or IP addresses. 
                The information collected in this study will be labeled only with a participant ID code that contains no personally 
                identifying information. 
                <br/><br/>

                Aggregate data from this study may be presented in scientific publications or talks. Non-identifiable data from 
                this study may be shared publicly to further scientific research. Great care will be taken to ensure that it is 
                not possible to recover individual identities from shared data. Specifically, audio recordings made during your 
                study session will not be associated with your name or other identifying information. However, these data are 
                intrinsically identifiable – that is, a person listening to the recording could identify you without any other 
                information. 
                <br/><br/>
                
                For this reason, we strongly discourage you from discussing potentially sensitive personal information during your 
                narratives. To reduce reputational risks to you, we will convert the audio narrative to text, so that your voice 
                cannot identify you. Additionally, we will examine transcripts and anonymize them. For example, all full names of 
                people or places will be redacted and replaced with pseudonyms. Other potentially identifying content will be redacted.
                <br/><br/>

                Research data may be shared with officials of Dartmouth College, and others involved in the oversight of this 
                study as permitted by law. There is no guarantee that research data cannot be obtained by a court order or 
                other legal process. If you withdraw from the study, your data will be deleted.
                <br/><br/>

                <strong>Will you be paid to take part in this study? </strong>
                Yes, you will receive $3.75.
                <br/><br/>

                <strong>Whom should you call with questions about this study? </strong>
                If you have any questions, concerns, or complaints about this study, you should contact Dr. Mark Thornton at Mark.A.Thornton@dartmouth.edu. 
            </p>

            <h2>CONSENT</h2>  
            <p>By pressing the button below, you agree that:</p>
            <p>
                1. You agree to take part in this research.<br/>
                2. You feel like you understand what you are agreeing to.<br/>
                3. You know you are free to withdrawal at any time.<br/>
            </p>

            <div>
                <p>When you are ready to begin, please press the button below:</p>
                <button className="advance-button" onClick={pageEvent}>continue</button>
            </div>
        </div>
    );
};