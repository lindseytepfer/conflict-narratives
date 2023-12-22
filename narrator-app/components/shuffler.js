import React, {useEffect} from "react";

export const Shuffler = ( {pageEvent, setTopicPairs} ) => {
    const social =  ["family member","friend","romantic partner", "classmate",
    "employer or employee", "neighbor or roommate", "business or property owner", "stranger or acquaintance"];
    const topic = ["something financial", "parenting", "health", "a social gathering", "identity"];
    
    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
    }
    
    const generatePairs = (array1, array2, numPairs) => {
        const pairs = [];
        for (let i = 0; i < numPairs; i++) {
          const randomIndex1 = Math.floor(Math.random() * array1.length);
          const randomIndex2 = Math.floor(Math.random() * array2.length);
          const pair = [array1[randomIndex1], array2[randomIndex2]];
          pairs.push(pair);
        }
        return pairs;
      }

    // when the component loads, randomize the order of the elements within 
    // 'social' and 'topic' arrays. Then, randomly select 8 pairs of elements
    // to create a nested array to work from.  

    useEffect (()=>{
        shuffle(social);
        shuffle(topic); 
        const pairs = generatePairs(social, topic, 8);
        setTopicPairs(pairs)

        const timer = setTimeout(() => {
            console.log("topics shuffled and selected.")
            pageEvent();
        }, 1000)

        return () => clearTimeout(timer);
    },[])

    return(
        <div>
        <p>Generating topics ...</p>
        </div>
    );
};