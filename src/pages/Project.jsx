import React, { useState, useEffect } from "react";

const url = "http://localhost:3000/api/v1/posts";

const Project = () => {
  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = async () => {
    try {
      const response = await fetch(url);
      const blogs = await response.json();
      setBlogs(blogs);
      console.log(blogs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      <main className="posts">{/* <Posts post={blogs} /> */}</main>
    </>
  );
};

export default Project;
