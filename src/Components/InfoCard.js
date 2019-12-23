import React, { Component } from "react";
import CardData from "../Data/test.json";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
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
              <div className="accordion">
                <Accordion>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Click me!
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                         


                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default InfoCard;
