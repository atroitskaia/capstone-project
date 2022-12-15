import React, { useState, useEffect } from "react";
import LineChart from "../graphs/LineChart";
import BarChart from "../graphs/BarChart";
import DoughnutChart from "../graphs/Doughnut";

import "./urlBox.css";

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
  const [url, setUrl] = useState({ urlField: "" });
  const [apiData, setApiData] = useState([]);
  const [graphDataLoaded, setGraphDataLoaded] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleUrlSubmission = (e) => {
    e.preventDefault();
    const urlField = url.urlField;

    // Access YouTube Id
    let youTubeId, twitterId;

    // if twitter
    // https://twitter.com/VP/status/1596597309344825346?s=20

    // 1596681448127447042

    // ****************************************************************
    // previously written was url.urlField("twitter.com") > -1
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
      // endpointUrl = "http://localhost:8000/api/website/youtube/";
      endpointUrl =
        "http://localhost:8000/api/website/youtube/" + youTubeId + "/";
    } else if (determineYouTubeOrTwitter(url.urlField) === "Twitter") {
      endpointUrl =
        "http://localhost:8000/api/website/twitter/" + twitterId + "/";
    } else {
      console.log("not a valid url");
    }

    setLoading(true);
    fetch(endpointUrl)
    .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setApiData(data);
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
    const newUrl = { ...url };
    newUrl[e.target.name] = e.target.value;
    setUrl(newUrl);
  };

  return (
    <div className="url-box-wrapper section__padding">
      <div className="urlBox">
        <form className="sentiment-form" onSubmit={handleUrlSubmission}>
          <input
            onChange={handleUrlChange}
            type="text"
            placeholder="Enter in a link to a social media post"
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
          <DoughnutChart
            apiData={apiData}
            website={determineYouTubeOrTwitter(url.urlField)}
          />
        )}

        {!loading && graphDataLoaded && (
          <BarChart
            apiData={apiData}
            website={determineYouTubeOrTwitter(url.urlField)}
          />
        )}
        
          {!loading && graphDataLoaded && (
            <LineChart
              apiData={apiData}
              website={determineYouTubeOrTwitter(url.urlField)}
            />
          )}
        
      </div>
    </div>
  );
};

export default URLBox;
