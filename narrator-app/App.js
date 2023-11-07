import './App.css';
import { useState, useEffect } from "react";
import { Intro } from "./components/intro";
import { Shuffler } from "./components/shuffler";
import { Experiment } from "./components/experiment";
import { Completion } from "./components/completion";

const App = () => {
    const [subID, setSubID] = useState(0)
    const [pageState, setPageState] = useState(0);
    const [socialList, setSocialList] = useState([]);
    const [topicList, setTopicList] = useState([]);

    const nextPage = () => setPageState((prev) => prev + 1);
    
    console.log("userID:",subID)
    return (
        <div className="App">
            {(() => {
                switch (pageState) {
                    case 0:
                        return <Intro pageEvent={nextPage} subID={subID} setSubID={setSubID} />
                    case 1:
                        return <Shuffler pageEvent={nextPage} topicList={topicList} setTopicList={setTopicList} socialList={socialList} setSocialList={setSocialList} />
                    case 2: 
                        return <Experiment pageEvent={nextPage} topicList={topicList} socialList={socialList} />
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
