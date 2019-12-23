import React, { Component } from "react";
import CardData from "../Data/test.json";
import { Card } from "react-bootstrap";

import "./info-card.css";

class InfoCard extends Component {
  render() {
    return (
      <div className="grid-container">
        {CardData.items.map((item, index) => {
          return (
            <div>
              <a>
                <div className="infoCard">
                  <Card.Img variant="top" src={item.PhotoName} />
                </div>
              </a>
            </div>
          );
        })}
      </div>
    );
  }
}

export default InfoCard;
