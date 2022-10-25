import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseSummary from "../Shared/CourseSummary/CourseSummary";

const Category = () => {
  const courses = useLoaderData();
  console.log(courses);
  return (
    <div>
      <h2>Our total Courses {courses.length}</h2>
      <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4 mt-4">
        {courses.map((course) => (
          <CourseSummary key={course.id} course={course}></CourseSummary>
        ))}
      </div>
    </div>
  );
};

export default Category;
