import React, { Component } from "react";
import { Card, Container, Col, Row, Button } from "react-bootstrap";

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      var projects2 = this.props.data.projects.map(function (project) {
        return (
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={"images/portfolio/" + project.image}
              />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.category}</Card.Text>
                <Button variant="primary">See Code</Button>
              </Card.Body>
            </Card>
          </Col>
        );
      });
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = "images/portfolio/" + projects.image;
        return (
          <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap">
              <a href={projects.url} title={projects.title} target="_blank">
                <img alt={projects.title} src={projectImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{projects.title}</h5>
                    <p>{projects.category}</p>
                    <br />
                    <p>{projects.tech}</p>
                  </div>
                </div>
                <div className="link-icon">
                  <i className="fa fa-link"></i>
                </div>
              </a>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Work.</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
