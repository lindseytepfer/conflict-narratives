import React, {useEffect} from "react";

export const Shuffler = ( {pageEvent, socialList, setSocialList, topicList, setTopicList} ) => {
    const social =  ["family member","friend","romantic partner", "classmate",
    "employer or employee", "neighbor or roommate", "business or property owner", "stranger or acquaintance"];
    const topic = ["something financial", "parenting", "health", "a social gathering", "identity"];
    
    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
    }
     
    useEffect (()=>{
        shuffle(social);
        shuffle(topic); 
        setSocialList(social);
        setTopicList(topic);

        const timer = setTimeout(() => {
            console.log("trials shuffled.")
            pageEvent();
        }, 2000)

        return () => clearTimeout(timer);
    },[])

    return(
        <div>
        <p>Generating topics ...</p>
        </div>
    );
};