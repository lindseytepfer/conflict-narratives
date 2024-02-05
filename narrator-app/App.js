import './App.css';
import { useState, useRef, useEffect } from "react";
import { Consent } from './components/consent';
import { Intro } from "./components/intro";
import { Experiment } from "./components/experiment";
import { Demographics } from "./components/demographics";
import { Debrief } from "./components/debrief";


const App = () => {
    const [subID, setSubID] = useState(0)
    const [pageState, setPageState] = useState(0);

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
                        return <Experiment subID={subID} pageEvent={nextPage} />
                    case 3:
                        return <Demographics pageEvent={nextPage} />
                    case 4:
                        return <Debrief pageEvent={nextPage} />
                    default:
                        return null;
                }
            })()}
        </div>
    );
};

export default App;
