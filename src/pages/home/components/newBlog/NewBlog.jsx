import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { RiMovie2Fill } from "react-icons/ri";
import "./newBlog.scss";
import BlogCard from "../../../../components/blogCard/BlogCard";

export default function NewBlog() {
  return (
    <div className="new-blog">
      <Container>
        <div className="new-blog__heading">
          <RiMovie2Fill />
          <p className="sub-heading">Directly Blog Posts</p>
          <h4>Latest News & Articles from the Posts</h4>
        </div>
        <div className="blog-container">
          <Row>
            <Col xs={12} lg={4}>
              <BlogCard />
            </Col>
            <Col xs={12} lg={4}>
              <BlogCard />
            </Col>
          </Row>
        </div>
      </Container>
      <div className="overlay"></div>
    </div>
  );
}
