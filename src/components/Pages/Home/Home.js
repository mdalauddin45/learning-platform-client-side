import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseSummary from "../Shared/CourseSummary/CourseSummary";

const Home = () => {
  const courses = useLoaderData();
  console.log(courses);
  return (
    <div>
      <h1>Our Total Coures: {courses.length} </h1>
      {courses.map((course) => {
        <CourseSummary key={course.id} course={course}></CourseSummary>;
      })}
    </div>
  );
};

export default Home;
