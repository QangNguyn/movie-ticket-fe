import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BiLogoPinterestAlt } from "react-icons/bi";
import { BsFacebook } from "react-icons/bs";
import "./footer.scss";

export default function Footer() {
  return (
    <footer>
      <Container>
        <div className="footer-top">
          <a href="#" className="logo">
            <img
              src="https://demo.ovatheme.com/aovis/wp-content/uploads/2023/02/logo-white.png"
              alt=""
            />
          </a>
          <ul className="social">
            <li>
              <a href="#">
                <AiOutlineTwitter />
              </a>
            </li>
            <li>
              <a href="#">
                <BsFacebook />
              </a>
            </li>
            <li>
              <a href="#">
                <BiLogoPinterestAlt />
              </a>
            </li>
            <li>
              <a href="#">
                <AiOutlineInstagram />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-main">
          <Row>
            <Col lg={4}>
              <h3>Buy movie tickets easily with Aovis system nationwide</h3>
              <button>Get Your Ticket</button>
            </Col>
            <Col lg={2}>
              <span className="title">Movie</span>
              <ul>
                <li>
                  <a href="#">Action</a>
                </li>
                <li>
                  <a href="#">Adventure</a>
                </li>
                <li>
                  <a href="#">Animation</a>
                </li>
                <li>
                  <a href="#">Comedy</a>
                </li>
                <li>
                  <a href="#">Crime</a>
                </li>
              </ul>
            </Col>
            <Col lg={2}>
              <span className="title">Links</span>
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">My account</a>
                </li>
                <li>
                  <a href="#">News</a>
                </li>
                <li>
                  <a href="#">Latest Events</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </Col>
            <Col lg={4}>
              <span className="title">Newsletter</span>
              <div className="newsletter">
                <span>Subscribe to Leitmotif newsletter this very day.</span>
                <form action="">
                  <input type="text" placeholder="Email Address" />
                  <button>Send</button>
                </form>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
}
