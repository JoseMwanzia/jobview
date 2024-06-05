import React from 'react'
import logo from '../assets/imgLogo.png';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


function CompanyDashboard() {
  return (
    <div style={{height: '1000px'}}>
      <Navbar expand="lg"  className="bg-body-tertiary">
        <Container fluid style={{width: "100%"}}>
          <Col xs={6} md={4}>
            <Image src={logo} rounded style={{width: "25%", aspectRatio: "3/2", objectFit: 'contain'}} />
          </Col>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Find Jobs</Nav.Link>
              <NavDropdown title="Employers" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Find Talent</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  More Talent
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                More Talent
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Candidates" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Job Listings</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                More Talent
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Job Listings
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Pages" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default CompanyDashboard