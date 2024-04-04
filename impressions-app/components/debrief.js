import React from "react";

export const Debrief = ( { pageEvent } ) => {

    return(
        <div className="consent-form">
            <h1>DEBRIEF TO PARTICIPANTS</h1>
            <h2>Dartmouth College</h2>
            <h3>Study Title: Interpersonal Conflict Narratives Research</h3>
            <h4>Principal Investigator: Dr. Mark Allen Thornton</h4><br/>

            <strong>What was the purpose of this study?</strong>
            <p>
                This study aimed to understand how people experience, talk, receive or give feedback about interpersonal conflicts. 
                While listening to interpersonal conflicts, like the ones you just read about and interpreted, people share 
                information in multiple ways. For example, the tone of voice and the verbal content of their speech may predict 
                what impression they have about the individuals involved in an interpersonal conflict. This project will analyze 
                these different streams of information, as well as the explicit judgements provided after receiving a conflict 
                narrative. Doing so will provide new insight into how people form impressions of people in conflict, seek and 
                deliver feedback, and experience different categories of interpersonal conflict.
            </p>
            <strong>What were our research goals?</strong>
            <p>
                We were focused on two main research goals. First, we aim to understand how people form impressions about people 
                narrating an interpersonal conflict, as well as the other individuals involved in the narrated conflict. Second, we wish to 
                understand how receivers of a story interpret the narratives, particularly depending on the specific conflict topic, 
                and whether the receiver has personally experienced that conflict topic as well. 
            </p>
            <strong>How was this study conducted?</strong>
            <p>
                During the study, you read stories about an interpersonal conflict scenario from a narrator and were asked to record 
                audio of yourself recalling what the story was about, as well as what your interpretation of the conflict is. Afterwards, 
                you indicated whether you have personally experienced this type of conflict, what questions you would want to know 
                from the narrator to clarify the situation, and what type of feedback you would give to the narrator in the 
                hypothetical scenario that you were actually listening to their story. 
            </p>
            <strong>Did we tell you everything?</strong>
            <p>
                There was no deception in this study. 
            </p>
            <strong>Why is this study important?</strong>
            <p>
                People seek others out to discuss the interpersonal conflicts in their lives. Whether the goal is to receive feedback 
                about how to navigate the dilemma, or simply share and validate their point of view, the act of divulging information 
                about negative social interactions to others is an essential part of human life. We are using these methods to expand 
                our scientific understanding of how people interpret stories about interpersonal conflicts, how their personal experience 
                with similar interpersonal conflicts affects their impressions of the conflict overall, and what type of support the 
                recipients of such stories would provide for the narrators. 
            </p>
            <strong>What if I want to learn more?</strong>
            <p>
                You can read more about our research – including feeling available copies of our published 
                scientific articles – on our lab website: http://scraplab.org/ 
            </p>
            <p>
                This study was conducted by researchers at the Social Computation Representation And Prediction Lab in the Psychology and Brain Sciences 
                Department at Dartmouth College, Hanover, NH, USA. If you have any questions, please contact principal investigator Mark Thornton at 
                mark.a.thornton@dartmouth.edu. 
            </p>
            <p>
                This research has been reviewed and approved by the Committee for the Protection of Human Subjects at Dartmouth College. 
                They can be reached by phone at (603) 646-6482, or by email at cphs@dartmouth.edu, if your questions, concerns, or complaints are 
                not being answered by the research team, if you cannot reach the research team, if you want to talk to someone besides the research 
                team, or if you have questions about your rights as a research participant.
            </p>

            <div>
                <p><strong>PLEASE CLICK THE BUTTON BELOW TO BE REDIRECTED TO CLOUD RESEARCH:</strong></p>
                <a href="CLOUD_RESEARCH_URL"><button className="advance-button">COMPLETE STUDY</button></a>
            </div>
        </div>
    );
};