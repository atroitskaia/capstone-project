import React, { useState, useEffect } from "react";
import LineChart from "../graphs/LineChart";
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

  const handleUrlSubmission = (e) => {
    e.preventDefault();
    const urlField = url.urlField;

   
    // Access YouTube Id
    let youTubeId, twitterId;

    // if youtube.com?
    if (url.urlField.indexOf("youtube.com") > -1) {
    const paramsString = urlField.split("?")[1];
    const paramsArr = paramsString.split("&");

      paramsArr.forEach((item) => {
        let parts = item.split("=");
        if (parts[0] === "v") {
          youTubeId = parts[1];
        }
      });
    }

    // if youtu.be
    if (url.urlField.indexOf("youtu.be/") > -1) {
      youTubeId = urlField.split('youtu.be/')[1]
    }

    let endpointUrl;
    if (determineYouTubeOrTwitter(url.urlField) === "YouTube") {
      endpointUrl = "http://localhost:8000/website/youtube/" + youTubeId + "/";
    } else if (determineYouTubeOrTwitter(url.urlField) === "Twitter") {
      endpointUrl = "http://localhost:8000/website/twitter/" + twitterId + "/";
    } else {
      console.log("not a valid url");
    }

    fetch(endpointUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setApiData(data);
        setGraphDataLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUrlChange = (e) => {
    const newUrl = { ...url };
    newUrl[e.target.name] = e.target.value;
    setUrl(newUrl);
  };

  return (
    <>
      <div className="urlBox">
        <form onSubmit={handleUrlSubmission}>
          <input
            onChange={handleUrlChange}
            type="text"
            placeholder="Enter URL"
            id="urlField"
            name="urlField"
            value={url.urlField}
          />
          <button type="submit">Go</button>
        </form>
      </div>
      <div style={{ textAlign: "center" }}>
        {graphDataLoaded && (
          <LineChart
            apiData={apiData}
            website={determineYouTubeOrTwitter(url.urlField)}
          />
        )}
      </div>
    </>
  );
};

export default URLBox;
