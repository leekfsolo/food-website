import React, { FC, useState } from "react";
import { Col, Container, Image, Nav, Navbar, Row } from "react-bootstrap";
import { ShortCuts } from "../model";

import logo from "../../../assets/ic/logo.png";
import styles from "./MainNavbar.module.scss";
import { Link } from "react-router-dom";

interface Props {}

const MainNavbar: FC<Props> = (props: Props) => {
  const [pageShortcuts, setPageshortcuts] = useState<Array<ShortCuts>>([
    {
      text: "home",
      url: "#home",
      isActive: true,
    },
    {
      text: "about",
      url: "#about",
      isActive: false,
    },
    {
      text: "menu",
      url: "#menu",
      isActive: false,
    },
    {
      text: "catering",
      url: "#catering",
      isActive: false,
    },
    {
      text: "franchise",
      url: "#franchise",
      isActive: false,
    },
    {
      text: "locations",
      url: "#locations",
      isActive: false,
    },
    {
      text: "faq",
      url: "#faq",
      isActive: false,
    },
  ]);

  const setItemActive = (url: string) => {
    const pShortcuts = pageShortcuts.map((ps) => {
      ps.isActive = url === ps.url;
      return ps;
    });

    setPageshortcuts(pShortcuts);
  };

  return (
    <Container>
      <Row>
        <Col md={10} className="offset-1">
          <Navbar bg="white" expand="lg" className={styles.nav}>
            <Navbar.Brand href="#home" className={styles.nav_brand}>
              <Image src={logo} className={styles.nav_logo} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav
                className={`${styles.nav_content_list} me-auto d-flex align-items-center justify-content-center`}
              >
                {pageShortcuts.map((ps, index) => {
                  return (
                    <Nav.Item key={index}>
                      <Link
                        to={ps.url}
                        className={ps.isActive ? styles.active : ""}
                        onClick={() => setItemActive(ps.url)}
                      >
                        {ps.text}
                      </Link>
                    </Nav.Item>
                  );
                })}
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
