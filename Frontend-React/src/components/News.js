import React, { useState } from "react";
import "./news.css";
import axios from "axios";
const News = ({ id, title, description, img, Comments, date }) => {
  const [viewComments, setView] = useState(false);
  const [comment, setComment] = useState("");
  const [comms, setComms] = useState([]);

  const handlePost = () => {
    if (comment !== "") {
      axios
        .post("http://localhost:8084/newsfeed/comments/postComments", {
          comments: comment,
          newId: id,
          news: {
            nId: id,
          },
        })
        .then((response) => {
          console.log(response.data);
          // setUserId(response.data.id);
        });
    }
    setComment("");
  };

  const handleComments = () => {
    axios
      .get(`http://localhost:8084/newsfeed/comments/get/${id}`)
      .then((response) => {
        console.log(response.data);
        setComms(response.data);
      });
    if (viewComments === false) {
      setView(true);
    } else {
      setView(false);
    }
  };
  return (
    <div className=" bg-white my-4 border border-gray-400 rounded-sm news">
      {/*Header */}
      <div className="flex items-center p-2">
        <img
          className=" rounded-full h-14 w-14 border p-1 m-3 object-contain"
          src="https://p.kindpng.com/picc/s/394-3947019_round-profile-picture-png-transparent-png.png"
          alt=""
        />
        <div className="flex flex-col">
          <p className="flex-1  font-bold text-lg">{title}</p>
          <p className=" text-slate-400 text-sm">{date}</p>
        </div>
      </div>
      <h4 className=" ml-4 mb-2 pr-4 pl:2 ">{description}</h4>
      <img
        className=" mb-4 object-center object-cover w-full p-6"
        // style={{ width: "780px", height: "400px" }}
        src={img}
        alt=""
      />
      <div className="flex">
        <input
          type="text"
          value={comment}
          className=" h-12 ml-6 mb-4 mr-4  w-4/5 bg-gray-50 border   border-slate-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Add Comments..."
          onChange={(e) => {
            setComment(e.target.value);
          }}
          required
        />
        <button
          className="button"
          onClick={() => {
            handlePost();
          }}
        >
          Post
        </button>
        <button
          className="button"
          onClick={() => {
            handleComments();
          }}
        >
          View
        </button>
      </div>
      {viewComments && (
        <div>
          <hr className="mb-2"></hr>
          {comms.map((comment) => {
            return (
              <div class="container">
                <div class="arrow">
                  <div class="outer"></div>
                  <div class="inner"></div>
                </div>
                <div class="message-body">
                  <p>{comment.comments}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default News;
