import React from "react";
import {FetchSentiment} from "../utils/FetchSentiment";
import TestGraph from "./graphs/TestGraph";


const SentimentResults = () => {
    return (
        <div>
            Hello World!
            <div>
                <TestGraph />  
                <FetchSentiment />
            </div>
        </div>
    )

}

export default SentimentResults;


