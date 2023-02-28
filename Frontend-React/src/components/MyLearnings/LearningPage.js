import React from "react";
import { Row, Col, Card, CardHeader, CardBody } from "reactstrap";
import Navbar from "../Navbar/Navbar";
import Learning from "./Learning";
const LearningPage = () => {
  const blogs = [
    {
      id: 1,
      img: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*pWokineT8xy7ul-LRUb4Vg.jpeg",
      title: "Sentimental Analysis using Amazon Fine...",
      link: "https://medium.com/@ayushi_singh/sentimental-analysis-using-amazon-fine-food-review-dataset-3f8527cb2846",
      data: "In this tutorial we are going to look into amazon rating review dataset which consist of reviews from customer showing their experience. . .",
    },
    {
      id: 2,
      img: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*XbSI73PmmNM1Rcy2Il9gIQ.jpeg",
      title: "Balance The Imbalance -Dataset !!!",
      link: "https://medium.com/@ayushi_singh/balance-the-imbalance-dataset-5dfc4f70e6a6",
      data: "In the real world, we are going to encounter with lots of scenarios where we have to tackle with imbalanced dataset for example. . .",
    },
    {
      id: 3,
      img: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*y1nsvTfwjAjsrvML0r8K7A.jpeg",
      title: "Python vs R final battle!!!",
      link: "https://medium.com/@ayushi_singh/python-vs-r-final-battle-53e64e21d2a",
      data: "R and Python both of them are open- source programming language with the large community. New frameworks and libraries are added to both of them every single day. . .",
    },
    {
      id: 4,
      img: "https://miro.medium.com/v2/resize:fit:634/format:webp/1*lh4J7Oa2k3KNlxIlKENAlg.jpeg",
      title: "What is so confusing about confusion matrix?",
      link: "https://medium.com/@ayushi_singh/what-is-so-confusing-about-confusion-matrix-53d79022ab71",
      data: "Confusion matrix basically provide us with the information of number of correct and incorrect predictions.",
    },
    {
      id: 5,
      img: "https://miro.medium.com/max/720/1*023H3qPcgPc47PgW3KkV6w.webp",
      title: "Skills to acquire in 2022",
      link: "https://medium.com/@ayushi_singh/this-is-how-freshers-can-secure-jobs-during-this-pandemic-c701b2c7e8be",
      data: "In this lockdown period, we are spending 24 hours in some sort of entertainment, games, etc. Utilize this time as this time is never gonna return back",
    },
    {
      id: 6,
      img: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*5cwBRWP_RCgYdhn--aFkCQ.jpeg",
      title: "Skills for Data Analyst!!!",
      link: "https://medium.com/@ayushi_singh/what-to-prepare-for-data-analyst-role-874f84f353a2",
      data: "The most important skills that is asked among various companies is the ability to perform at any programing language usually Python and R.If you know any of them you are pretty good to go.",
    },
  ];
  return (
    <div>
      <Navbar />

      <div className="">
        {/* <p
          className=" text-center mt-20"
          style={{ fontSize: "40px", fontWeight: "100px" }}
        >
          Blogs
        </p>
        <hr
          class="w-32 h-2 mx-auto  bg-red-700  border-0 rounded mt-1"
          style={{ height: "3px", backgroundColor: " #af356a", opacity: "2" }}
        /> */}

        <div className=" px-20 pb-20 pt-10 mt-16">
          <Row>
            {blogs.map((blog, i) => {
              return (
                <Col md={4} lg={4} sm={4} xs={12} key={i} className="mb-2">
                  <Learning
                    img={blog.img}
                    title={blog.title}
                    link={blog.link}
                    data={blog.data}
                  />
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default LearningPage;
