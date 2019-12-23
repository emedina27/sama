import React, { Component } from "react";
import CardData from "../Data/test.json";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./info-card.css";

class InfoCard extends Component {
  render() {
    return (
      <div className="grid-container">
        {CardData.items.map((item, index) => {
          return (
            <div>
              <div className="infoCard">
                <Card.Img variant="top" src={item.PhotoName} />
              </div>
              <div className>
                <Card.Body>
                  <Card.Title>{item.ItemName}</Card.Title>
                  <Button variant="primary">See More</Button>
                </Card.Body>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default InfoCard;
