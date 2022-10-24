import React, { useState } from "react";
import { FetchSentiment } from "../../utils/FetchSentiment";
import "./urlBox.css";

// Form that extracts URL from an input field

const URLBox = () => {
  const [url, setUrl] = useState({ urlField: "" });
  const [apiData, setApiData] = useState([]);

  const handleUrlSubmission = (e) => {
    // handleUrlSubmission returns an event (e)
    // this will prevent default value to going to a new page

    e.preventDefault();
    // console.log(url.urlField);
    const urlField = url.urlField;

    let type;
    if (
      urlField.toLowerCase().indexOf("youtube.com") > -1 ||
      urlField.toLowerCase().indexOf("youtu.be") > -1
    ) {
      type = "youtube";
    } else if (urlField.toLowerCase().indexOf("twitter.com") > -1) {
      type = "twitter";
    } else {
      type = "";
    }

    // error handling "is not a valid url for youtube or twitter, please retry

    // https://endpoint.com?url=http://www.youtube.com&type=youtube
    // https://endpoint.com?url=http://www.twitter.com&type=twitter
    
    // Next Steps
    // error handling "is not a valid url for youtube or twitter, please retry"

    const sentimentBaseEndpoint = "https://jsonplaceholder.typicode.com/posts";
    const endPointUrl = `${sentimentBaseEndpoint}?url=${urlField}&type=${type}`;
    // fetch data from API
    fetch(sentimentBaseEndpoint)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setApiData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const handleUrlChange = (e) => {
    // console.log(e.target.value);
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
        {/* <form onSubmit={handleUrlSubmission}>
        <input type="text" placeholder="Enter Twitter URL" id="twitter" name="twitter"/>
        <button type="submit">Go</button>
        </form> */}
      </div>
      <div>
        <ul style={{textAlign: 'center'}}>
          {apiData.map((apiItem) => {
            return <li key={apiItem.id} style={{color: 'white'}}>{apiItem.userId}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default URLBox;
