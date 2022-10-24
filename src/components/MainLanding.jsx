import React from 'react';
import Sentiment from "./sentiment/Sentiment";
import Analytics from "./analytics/Analytics";
import URLBox from './urlBox/URLBox';
import SentimentResults from './SentimentResults';

const MainLanding = () => {
    return (
        <>
            <Sentiment />
            <Analytics />
            <URLBox />
            <SentimentResults />
        </>
    )
};

export default MainLanding;