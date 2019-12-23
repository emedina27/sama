import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "../Components/grid-layout.css";

class Footer extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <Card ClassName="footer" style={{ width: "100%" }}>
              <Card.Header>Contact</Card.Header>
              <Card.Body>
                <Card.Title> SAMA</Card.Title>

                <Card.Text>1140 Holland Dr #2 Boca Raton FL, 33487</Card.Text>
                <Card.Subtitle>561-628-4886</Card.Subtitle>

                <Button variant="outline-primary">Home</Button>
              </Card.Body>
            </Card>
          </div>
        </div>

        <footer class="app-footer">
          <div>
            <a href="https://SAMA.io">SAMA</a>
            <span>&copy; 2019 sama-creativeLabs.</span>
          </div>
          <div class="ml-auto">
            <span>Powered by</span>
            <a href="https://SAMA.io">SAMA</a>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
