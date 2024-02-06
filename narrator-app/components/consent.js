import React from "react";

export const Consent = ( { pageEvent } ) => {

    return(
        <div className="consent-form">
            <h1>CONSENT TO TAKE PART IN RESEARCH</h1>
            <h2>Dartmouth College</h2>
            <h3>Study Title: Online behavioral studies of interpersonal conflict</h3>
            <h4>Principal Investigator: Mark Allen Thornton</h4>
            <p> 
                You are being asked to take part in a research study. Taking part in research is voluntary. 
            </p>
            <p>
                It is your choice whether or not to participate in this research.  If you choose to participate, you may change your mind and leave the study at any time.  Refusal to participate or stopping your participation will involve no penalty or loss of benefits to which you are otherwise entitled. If at any time before the completion of the study you close the experiment window or tab, this will be treated as withdrawn consent and any data you have provided will be discarded.
            </p>
            <p>
                <strong>Study Summary: </strong><br/>
                This study aims to understand how people narrate the interpersonal conflicts in their lives, and what type of feedback, or responses, they want to receive from listeners. Importantly, the narratives collected from this study will be later transcribed, deidentified/anonymized and re-presented to future participants as text. This will allow us to later study how individuals understand and provide feedback on different types of interpersonal conflicts. 
                <br/><br/>
                The risk of participating in this study is minimal, no greater than what you would experience in the course of everyday internet use for an equivalent period of time. Your participation in this study is completely voluntary. You many choose not to participate. You may withdraw at any time during the study without penalty by simply closing this tab or window of your web browser.
            </p>
            <p>
                <strong>What is the purpose of this study?</strong><br/>
                The purpose of the study is to examine how people narrate their interpersonal conflicts and seek feedback after sharing their personal experiences. A follow-up study will present deidentified/anonymized text transcriptions of the narratives collected from the current study to future participants. This will be done to understand how individuals understand and provide feedback on different types of interpersonal conflicts.
            </p>
            <p>
                <strong>Will you benefit from taking part in this study?</strong><br/>
                You will not personally benefit from being in this research study.
            </p>
            <p>
                <strong>What does this study involve?</strong><br/>
                Your participation in this study will take approximately 30 minutes. During this time, you will be asked to record yourself narrating a personal story of interpersonal conflict that you have experienced. The audio recordings will allow us to understand how people share information in different ways (e.g., speech tone and content). Afterwards, you will be asked to answer questions about when the conflict occurred, the demographics of the individuals involved in the conflict, whether you spoke about the conflict before, the emotions you experienced during the conflict, and the type of feedback you would want to receive if you were to share this experience with someone in real life. You will also be asked to complete a demographic survey. After the data has been collected, it will be transcribed and converted to text, deidentified/anonymized, and used as stimuli for a follow-up study with future participants, who will read the narratives. 
            </p>
            <p>
                <strong>What are the risks involved with being enrolled in this study?</strong> <br/>
                If you choose to participate, and record audio of yourself narrating a personal experience with various conflict topics, we urge you to avoid discussing potentially sensitive personal information. Moreover, we ask that you do not share narratives including violent interpersonal conflict, such as abuse or assault. 
            </p>
            <p>
                <strong>How will your privacy be protected?</strong><br/>
                The data we collect from this study will not be identified by any names, email addresses, or IP addresses. The information collected in this study will be labeled only with a participant ID code that contains no personally identifying information. 
            </p>
            <p>
                Aggregate data from this study may be presented in scientific publications or talks. Non-identifiable data from this study may be shared publicly to further scientific research. Great care will be taken to ensure that it is not possible to recover individual identities from shared data. Specifically, audio recordings made during your study session will not be associated with your name or other identifying information. However, these data are intrinsically identifiable – that is, a person listening to the recording could identify you without any other information. For this reason, <strong>we strongly discourage you from discussing potentially sensitive personal information during your narratives.</strong> To reduce reputational risks to you, we will convert the audio narrative to text, so that your voice cannot identify you. 
            </p>
            <p>
                Additionally, we will examine transcripts and anonymize them. For example, all full names of people or places will be redacted and replaced with pseudonyms. Other potentially identifying content will be redacted. After these deidentifying/anonymization steps are complete, the text version of the narrative data will be preserved for later use as stimuli to future participants in a follow up study, as mentioned previously.
                Research data may be shared with officials of Dartmouth College, and others involved in the oversight of this study as permitted by law. There is no guarantee that research data cannot be obtained by a court order or other legal process. If you withdraw from the study, your data will be deleted.
            </p>
            <p>
                <strong>Will you be paid to take part in this study?</strong><br/>
                Yes, you will receive $3.75.
            </p>
            <p>
                <strong>Whom should you call with questions about this study?</strong><br/>
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