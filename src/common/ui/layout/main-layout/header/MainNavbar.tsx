import React, { FC } from "react";
import { Container, Image, Nav, Navbar } from "react-bootstrap";
import logo from "../../../assets/ic/logo.png";

interface Props {}

const MainNavbar: FC<Props> = (props: Props) => {
  return (
    <Container>
      <div className="row">
        <div className="col-md-12">
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">
              <Image src={logo} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
                <Nav.Link href="#link">Menu</Nav.Link>
                <Nav.Link href="#link">Catering</Nav.Link>
                <Nav.Link href="#link">Franchise</Nav.Link>
                <Nav.Link href="#link">Locations</Nav.Link>
                <Nav.Link href="#link">Faq</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link>
                  <i className="fa-brands fa-instagram"></i>
                </Nav.Link>
                <Nav.Link>
                  <i className="fa-brands fa-facebook"></i>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </Container>
  );
};

export default MainNavbar;
