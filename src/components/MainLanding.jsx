import React from 'react';
import Sentiment from "./sentiment/Sentiment";
import Analytics from "./analytics/Analytics";
import URLBox from './urlBox/URLBox';

const MainLanding = () => {
    return (
        <>
            <Sentiment />
            <Analytics />
            <URLBox />
        </>
    )
};

export default MainLanding;