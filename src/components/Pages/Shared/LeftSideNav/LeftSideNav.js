import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./LeftSideNav.css";

const LeftSideNav = () => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    fetch(`https://server-site-eight.vercel.app/courses-categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  // console.log(categories);
  return (
    <div className="category shadow">
      <h5>Our Coureses</h5>
      <div className="sidenav-item">
        {categories?.map((category) => (
          <p className="item" key={category.id}>
            <Link to={`/courses/${category.id}`}>{category.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
