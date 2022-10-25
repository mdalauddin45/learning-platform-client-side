import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseSummary from "../Shared/CourseSummary/CourseSummary";
const Courses = () => {
  const allCourses = useLoaderData();
  return (
    <div>
      <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4 mt-4">
        {allCourses.map((course) => (
          <CourseSummary key={course.id} course={course}></CourseSummary>
        ))}
      </div>
    </div>
  );
};

export default Courses;
