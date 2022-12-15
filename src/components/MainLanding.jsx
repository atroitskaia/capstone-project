import React from 'react';
import Sentiment from "./sentiment/Sentiment";
import URLBox from './urlBox/URLBox';
// import SentimentResults from './SentimentResults';
import Features from './features/Features';

const MainLanding = () => {
    return (
        <>
            <URLBox/>
            <Sentiment />
            <Features/>
        </>
    )
};

export default MainLanding;