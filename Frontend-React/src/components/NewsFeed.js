import React, { useState } from "react";
import News from "./News";
import "../App.css";
import axios from "axios";
import { useEffect } from "react";
import Navbar from "./Navbar/Navbar";
const NewsFeed = () => {
  const [news, setNews] = useState([]);
  const Comments = [
    {
      id: 1,
      com: "This was a very useful session",
    },
    {
      id: 2,
      com: "This was a very useful session",
    },
    {
      id: 4,
      com: "This was a very useful session",
    },
  ];
  const dummy = [
    {
      id: 1,
      title: "AI Seminar",
      description:
        "AI programming focuses on three cognitive skills: learning, reasoning and self-correction Learning processes. This aspect of AI programming focuses on acquiring data and creating rules for how to turn the data into actionable information. The rules, which are called algorithms, provide computing devices with step-by-step instructions for how to complete a specific task.",

      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMugpDRRdI23KvyRzd63-Fw-EI3rbJzRkfnw&usqp=CAU",
    },
    {
      id: 2,
      title: "Full Stack Seminar",
      description: "Ai is the latest treding technology",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMugpDRRdI23KvyRzd63-Fw-EI3rbJzRkfnw&usqp=CAU",
    },
  ];

  useEffect(() => {
    axios
      .get("http://localhost:8084/newsfeed/news/getAllNews")
      .then((response) => {
        console.log(response.data);
        setNews(response.data);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="news_parent">
        {news.map((post) => {
          return (
            <News
              key={post.nId}
              id={post.nId}
              title={post.newsTitle}
              date={post.date}
              description={post.newsDescription}
              img={post.newsImg}
              Comments={Comments}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewsFeed;
