import React, {useState, useEffect} from "react";
import DoughnutChart from "../graphs/Doughnut";
import LineChart from "../graphs/LineChart";
import BarChart from "../graphs/BarChart";
import {Cookies} from "react-cookie";
import "./urlBox.css";

const cookies = new Cookies();

const determineYouTubeOrTwitter = (url) => {
    if (url.indexOf("youtube") > -1 || url.indexOf("youtu.be") > -1) {
        return "YouTube";
    } else if (url.indexOf("twitter") > -1) {
        return "Twitter";
    } else {
        console.log("Not YouTube or Twitter");
    }
};

const URLBox = () => {
    const [loading, setLoading] = useState(false);
    const [url, setUrl] = useState({urlField: ""});
    const [chartData, setChartData] = useState([]);
    const [graphDataLoaded, setGraphDataLoaded] = useState(false);

    const [type, setType] = useState("absolute");
    const [frequency, setFrequency] = useState("all");

    const handleUrlSubmission = (e) => {
        e.preventDefault();
        const urlField = url.urlField;

        // Access YouTube Id
        let youTubeId, twitterId;

        // if twitter
        // https://twitter.com/VP/status/1596597309344825346?s=20

        // 1596681448127447042

        if (urlField.indexOf("twitter.com") > -1) {
            // Grab twitter id AND everything that follows it at the end of the url
            const twitterIdAndSuffix = urlField.split("/status/")[1];
            twitterId = twitterIdAndSuffix;

            // Check if there is a suffix
            // If so reassign the twitterId after removing the suffix
            if (twitterIdAndSuffix.indexOf("?") > -1) {
                twitterId = twitterIdAndSuffix.split("?")[0];
            }
        }

        // if youtube.com
        // https://www.youtube.com/watch?v=qOrlYzqXPa8&ab_channel=NetworkChuck
        if (url.urlField.indexOf("youtube.com") > -1) {
            const paramsString = urlField.split("?")[1];
            console.log(paramsString);
            const paramsArr = paramsString.split("&");
            console.log(paramsArr);

            paramsArr.forEach((item) => {
                let parts = item.split("=");
                if (parts[0] === "v") {
                    youTubeId = parts[1];
                }
            });
        }

        // if youtu.be
        //https://youtu.be/qOrlYzqXPa8
        if (url.urlField.indexOf("youtu.be/") > -1) {
            youTubeId = urlField.split("youtu.be/")[1];
        }

        // twitter id
        // if(urlField.indexOf())
        let endpointUrl;
        if (determineYouTubeOrTwitter(url.urlField) === "YouTube") {
            endpointUrl =
                "/api/website/youtube/" + youTubeId + "/";
        } else if (determineYouTubeOrTwitter(url.urlField) === "Twitter") {
            endpointUrl =
                "/api/website/twitter/" + twitterId + "/";
        } else {
            console.log("not a valid url");
        }

        setLoading(true);
        fetch(endpointUrl, {
            method: "GET",
            headers: {
                "X-CSRFToken": cookies.get("csrftoken"),
            },
            credentials: "same-origin"
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setChartData(data);
                setGraphDataLoaded(true);
                setLoading(false);
                const urlBox = document.querySelector(".urlBox");
                urlBox.scrollIntoView(true)
            })
            .catch((err) => {
                setLoading(false);
                console.log(err);
            });
    };

    const handleUrlChange = (e) => {
        const newUrl = {...url};
        newUrl[e.target.name] = e.target.value;
        setUrl(newUrl);
    };

    const handleTypeChange = (e) => {
        setType(e.target.value);
    }

    const handleFrequencyChange = (e) => {
        setFrequency(e.target.value);
    }

    return (
        <div className="url-box-wrapper section__padding">
            <div className="urlBox">
                <form className="sentiment-form" onSubmit={handleUrlSubmission}>
                    <input
                        onChange={handleUrlChange}
                        type="text"
                        placeholder="Enter a link to a social media post"
                        id="urlField"
                        name="urlField"
                        value={url.urlField}
                        className="input-analytics-input"
                    />
                    <button className="fetch-analytics-button" type="submit">
                        Analyze
                    </button>
                </form>
            </div>
            <div className="sentiment-results">
                {loading && <div className="loading-spinner">Loading Sentiment...</div>}
                {!loading && graphDataLoaded && (
                    <div>
                        <select className="fetch-analytics-button select-padding" value={type} onChange={handleTypeChange}>
                            <option value="absolute">Absolute</option>
                            <option value="relative">Relative</option>
                        </select>
                        <select className="fetch-analytics-button select-padding" value={frequency} onChange={handleFrequencyChange}>
                            <option value="all">All Time</option>
                            <option value="year">By year</option>
                            <option value="month">By month</option>
                        </select>
                    </div>
                )}
                {!loading && graphDataLoaded && (
                    <DoughnutChart
                        chartData={chartData}
                        website={determineYouTubeOrTwitter(url.urlField)}
                        frequency={frequency}
                    />
                )}

                {!loading && graphDataLoaded && (
                    <BarChart
                        chartData={chartData}
                        website={determineYouTubeOrTwitter(url.urlField)}
                        type={type}
                        frequency={frequency}
                    />
                )}

                {!loading && graphDataLoaded && (
                    <LineChart
                        chartData={chartData}
                        website={determineYouTubeOrTwitter(url.urlField)}
                        type={type}
                        frequency={frequency}
                    />
                )}

            </div>
        </div>
    );
};

export default URLBox;
