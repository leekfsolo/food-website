import React, { FC } from "react";
import { Col, Container, Image, Nav, Navbar, Row } from "react-bootstrap";
import logo from "../../../assets/ic/logo.png";

import styles from "./MainNavbar.module.scss";

interface Props {}

const MainNavbar: FC<Props> = (props: Props) => {
  return (
    <Container>
      <Row>
        <Col md={10} className="offset-1">
          <Navbar bg="white" expand="lg">
            <Navbar.Brand href="#home" className={styles.nav_brand}>
              <Image src={logo} className={styles.nav_logo} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className={`${styles.nav_content_list} me-auto`}>
                <Nav.Link href="#home">home</Nav.Link>
                <Nav.Link href="#about">about</Nav.Link>
                <Nav.Link href="#menu">menu</Nav.Link>
                <Nav.Link href="#catering">catering</Nav.Link>
                <Nav.Link href="#franchise">franchise</Nav.Link>
                <Nav.Link href="#locations">locations</Nav.Link>
                <Nav.Link href="#faq">faq</Nav.Link>
              </Nav>
              <Nav className={styles.nav_social_list}>
                <Nav.Link>
                  <i className="fa-brands fa-instagram"></i>
                </Nav.Link>
                <Nav.Link>
                  <i className="fa-brands fa-facebook"></i>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
};

export default MainNavbar;
