import './App.css';
import { useState, useRef } from "react";
import { Intro } from "./components/intro";
import { Shuffler } from "./components/shuffler";
import { Experiment } from "./components/experiment";
import { Completion } from "./components/completion";

const App = () => {
    const [subID, setSubID] = useState(0)
    const [pageState, setPageState] = useState(0);
    const [socialList, setSocialList] = useState([]);
    const [topicList, setTopicList] = useState([]);
    const stream = useRef(null);

    const nextPage = () => setPageState((prev) => prev + 1);
    
    console.log("App.js stream data:", stream)
    return (
        <div className="App">
            {(() => {
                switch (pageState) {
                    case 0:
                        return <Intro pageEvent={nextPage} subID={subID} setSubID={setSubID} stream={stream} />
                    case 1:
                        return <Shuffler pageEvent={nextPage} setTopicList={setTopicList}  setSocialList={setSocialList} />
                    case 2: 
                        return <Experiment pageEvent={nextPage} topicList={topicList} socialList={socialList} stream={stream} />
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
