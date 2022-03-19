import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Homepage.module.scss";

const Content = () => {
  return (
    <Container>
      <Row>
        <Col md={10} className="offset-1">
          <Row>
            <Col sm={4} className="ps-0">
              <div className={styles["inner-banner"]}>
                <h2>The Finest Ingredients For Taste Batter</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Obcaecati, itaque non. Sapiente enim commodi nisi pariatur
                  voluptate, qui distinctio minus inventore ad hic ipsum
                  accusamus? Voluptatibus accusantium vel amet eum.
                </p>
                <Link to="#" className={styles["btn-seemore"]}>
                  See More
                </Link>
              </div>
            </Col>
            <Col sm={4}></Col>
            <Col sm={4} className="text-end pe-0">
              <div className={styles["inner-banner"]}>
                <h2>Modern Recipes Greatly Taste Food</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Blanditiis aperiam ipsum harum sit quibusdam eos. Voluptatem
                  aliquid quidem sed, ex quam, facere illum quaerat dolores,
                  corrupti eius tenetur possimus necessitatibus?
                </p>
                <Link to="#" className={styles["btn-seemore"]}>
                  See More
                </Link>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Content;
