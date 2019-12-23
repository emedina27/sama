import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import InfoCard from "./InfoCard";
import "../App.css";
import logo from "../Assets/Logo.png";
import Footer from "./Footer";

class GridLayout extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row className="">
            <div className="App-header">
              <img src={logo} className="logo" />
            </div>
          </Row>

          <Row>
            <Col>
              <InfoCard />
            </Col>
          </Row>

          <Row>
            <Col>
              <Footer />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default GridLayout;
