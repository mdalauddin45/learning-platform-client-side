import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./LeftSideNav.css";

const LeftSideNav = () => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/courses-categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  // console.log(categories);
  return (
    <div className="category">
      <div className="">
        {categories?.map((category) => (
          <p key={category.id}>
            <Link to={`/category/${category.id}`}>{category.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
