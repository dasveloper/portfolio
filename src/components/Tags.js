import React from "react";
import { FaTimes } from "react-icons/fa";

const tags = [
  "In Production",
  "On Hold",
  "Discontinued",
  "React",
  "Node",
  "Shopify",
  "SCSS",
  "PHP",
  "AWS",
  "React Native",
  "GatsbyJS",
  "MySql",
  "Postgres",
  "Mongo",
  "Illustrator",
  "Photoshop",
  "Photography",
  "jQuery",
  "Phonegap",
  "Firebase",
  "SAAS",
  "Mobile App",
  "Physical Product"
];
const Tags = ({toggleFilters, activeFilters}) => {
  return (
    <div className="tag-wrapper">
      <div className="tags">
        {tags.map((tag, i) => {
          return (
            <button
              key={i}
              className={`tag ${activeFilters.includes(tag) ? "active" : ""}`}
              onClick={() => toggleFilters(tag)}
            >
              <span className="tag-dot" />
              <FaTimes className="tag-check" />
              <span className="tag-text">{tag}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Tags;
