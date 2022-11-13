import React, { useEffect, useState } from "react";

export const FetchSentiment = () => {
  const [posts, setPosts] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/posts";

  //   const url = "https://endpointapi.com"; // endpoint
  //   const youtubeURL =
  //     "?yturl=https://www.youtube.com/watch?v=nUmQ13rEVT4&list=RDCMUCVTyTA7-g9nopHeHbeuvpRA&start_radio=1&ab_channel=LateNightwithSethMeyers";
  //   const urlToSend = `${url}?yturl=${youtubeURL}`;

  //   useEffect(() => {
  //     fetch(url)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         // console.log(data);
  //         setPosts(data);
  //       });
  //   }, []);
  // }, [onClickSubmitYouTube]

  return (
    <>
      {console.log(posts)}
      <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.userId}</li>;
        })}
      </ul>
    </>
  );
};
