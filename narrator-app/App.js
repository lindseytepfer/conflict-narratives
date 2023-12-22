import './App.css';
import { useState, useRef } from "react";
import { Intro } from "./components/intro";
import { Shuffler } from "./components/shuffler";
import { Experiment } from "./components/experiment";
import { Completion } from "./components/completion";

const App = () => {
    const [subID, setSubID] = useState(0)
    const [pageState, setPageState] = useState(0);
    const [topicPairs, setTopicPairs] = useState([]);

    const nextPage = () => setPageState((prev) => prev + 1);
    
    return (
        <div className="App">
            {(() => {
                switch (pageState) {
                    case 0:
                        return <Intro pageEvent={nextPage} setSubID={setSubID} />
                    case 1:
                        return <Shuffler pageEvent={nextPage} setTopicPairs={setTopicPairs} />
                    case 2: 
                        return <Experiment pageEvent={nextPage} topicPairs={topicPairs} setTopicPairs={setTopicPairs} />
                    case 3:
                        return <Completion pageEvent={nextPage} />
                    default:
                        return null;
                }
            })()}
        </div>
    );
};

export default App;
