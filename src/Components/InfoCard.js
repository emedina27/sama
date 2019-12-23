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
                <Card.Img
                  variant="top"
                  src={item.PhotoName}
                  className="stack grow"
                />

                <div className="accordion">
                  <Accordion>
                    <Card>
                      <Card.Header>
                        <Accordion.Toggle
                          as={Button}
                          variant="link"
                          eventKey="0"
                        >
                          See More
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>
                          <Card.Title>{item.ItemName}</Card.Title>
                          <Card.Subtitle>{item.ItemID}</Card.Subtitle>
                          <Card.Text>{item.Description}</Card.Text>
                          <Card.Text className="font-weight-lighter">
                            {item.Dimensions}
                          </Card.Text>
                          <Card.Subtitle>{item.BasePrice}.00</Card.Subtitle>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default InfoCard;
