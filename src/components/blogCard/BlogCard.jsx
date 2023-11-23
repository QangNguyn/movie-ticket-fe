import React from "react";
import { Link } from "react-router-dom";
import "./blogCard.scss";

export default function BlogCard() {
  return (
    <div className="blog-card">
      <div className="blog-img">
        <Link>
          <img
            src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/03/blog-6.jpg"
            alt=""
          />
        </Link>
        <div className="blog-date">
          <span>23 Mar, 2023</span>
        </div>
      </div>
      <div className="blog-content">
        <Link className="blog-name">See Meila enjoyable capturing moment</Link>
        <Link className="read-more">Read more</Link>
      </div>
    </div>
  );
}
