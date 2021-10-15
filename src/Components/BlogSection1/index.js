import React, { useState } from "react";
import { BlogContainer, FilterItem, Post } from "./blogSection.styles";

const category = [
  {
    name: "All",
    label: "",
  },
  {
    name: "UX/UI Design",
    label: "design",
  },
  {
    name: "Resources",
    label: "resourses",
  },
  {
    name: "Developmemnt",
    label: "developmemnt",
  },
  {
    name: "Lessons",
    label: "lessons",
  },
];

const blogPost = [
  {
    image: "/images/Image1.png",
    date: "0ct 25, 2018",
    title: "How to take control of your own life",
    exc: "The interaction of the corporation and the client is still poorly programming the image of the enterprise. Targeting induces an experimental product life cycle. According to leading…",
    category: "design",
  },
  {
    image: "/images/Image2.png",
    date: "0ct 19, 2018",
    title: "How to take control of your own life",
    exc: "The interaction of the corporation and the client is still poorly programming the image of the enterprise. Targeting induces an experimental product life cycle. According to leading…",
    category: "resourses",
  },
  {
    image: "/images/Image3.png",
    date: "0ct 15, 2018",
    title: "How to take control of your own life",
    exc: "The interaction of the corporation and the client is still poorly programming the image of the enterprise. Targeting induces an experimental product life cycle. According to leading…",
    category: "lessons",
  },
];

export default function BlogSection1() {
  const [Filter, setFilter] = useState("");
  return (
    <BlogContainer>
      <div className="title">
        <h2>Our Blog</h2>
      </div>

      <div className="filter">
        {category.map((item, i) => (
          <FilterItem
            key={i}
            label={item.label}
            filter={Filter}
            onClick={() => setFilter(item.label)}
          >
            <p>{item.name}</p>
          </FilterItem>
        ))}
      </div>

      <div className="posts">
        {blogPost.map((item, i) => (
          <Post
            filter={Filter}
            category={item.category}
            key={i}
            className="post"
          >
            <div className="post-content">
              <img className="post-image" src={item.image} alt="" />

              <div className="post-date">
                <img src="/stylo.png" alt="icon" />
                {item.date}
              </div>

              <div className="post-title">
                <h2>{item.title}</h2>
              </div>

              <p className="post-exc">{item.exc}</p>

              <div className="post-interaction">
                <span className="post-like">
                  <img src="/UIIconHeart.png" alt="icon" /> 15
                </span>
                <span className="post-like">
                  <img src="/Comment.png" alt="icon" /> 3
                </span>
              </div>
            </div>
          </Post>
        ))}
      </div>
    </BlogContainer>
  );
}
