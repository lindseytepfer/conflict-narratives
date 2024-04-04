import './App.css';
import { useState } from "react";
import { Consent } from './components/consent';
import { Intro } from "./components/intro";
import { Experiment } from "./components/experiment";
import { Demographics } from "./components/demographics";
import { Debrief } from "./components/debrief";
import { TopicGenerator } from './components/topicGenerator';
import { FollowupQs } from './components/followupQs';


const App = () => {
    const [subID, setSubID] = useState(0)
    const [pageState, setPageState] = useState(0);

    const [topic, setTopic] = useState(null)


    const nextPage = () => setPageState((prev) => prev + 1);
    
    return (
        <div className="App">
            {(() => {
                switch (pageState) {
                    case 0:
                        return <Consent pageEvent={nextPage} />
                    case 1: 
                        return <Intro pageEvent={nextPage} setSubID={setSubID} />
                    case 2:
                        return <TopicGenerator pageEvent={nextPage} setTopic={setTopic} />
                    case 3:
                        return <Experiment subID={subID} topic={topic} pageEvent={nextPage} />
                    case 4:
                        return <FollowupQs subID={subID} topic={topic} pageEvent={nextPage} />
                    case 5:
                        return <Demographics subID={subID} pageEvent={nextPage} />
                    case 6:
                        return <Debrief pageEvent={nextPage} />
                    default:
                        return null;
                }
            })()}
        </div>
    );
};

export default App;
