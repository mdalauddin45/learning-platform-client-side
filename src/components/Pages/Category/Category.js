import React from "react";
import { useLoaderData } from "react-router-dom";

const Category = () => {
  const courses = useLoaderData();
  console.log(courses);
  return (
    <div>
      <h2>Our total Courses {courses.length} </h2>
    </div>
  );
};

export default Category;
