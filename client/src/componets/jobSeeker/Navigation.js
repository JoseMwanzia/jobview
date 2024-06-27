import React from 'react'
import logo from '../../assets/imgLogo.png';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import Logout from '../LoginAndLogout/Logout';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Navigation({jobSeeker}) {
  return (
    <Navbar expand="lg" collapseOnSelect sticky='top' className="bg-body-tertiary">
      <Container fluid style={{width: "100%"}}>

      
        <Col xs={6} md={4}>
          <Link to='/companyDashboard'>
            <Image src={logo} rounded style={{width: "25%", aspectRatio: "3/2", objectFit: 'contain'}} />
          </Link>
          <div className='me-5'>Welcome, {jobSeeker.first_name}</div>
        </Col>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="/myJobs">My Jobs</Nav.Link>

            <NavDropdown title="Employers" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#find-talent">Find Talent</NavDropdown.Item>
              <NavDropdown.Item href="#more-talent">
                More Talent
              </NavDropdown.Item>
              <NavDropdown.Item href="#more-talent2">
              More Talent
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Candidates" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Job Listings</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              More Talent
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                Job Listings
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Pages" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>

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

        {/* Use profile dropdown button */}
        <Dropdown align={{ lg: "end"  }} className='m-1'>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Welcome, {jobSeeker.first_name}
        </Dropdown.Toggle>

        <Dropdown.Menu className='col-lg-3'>
            <Dropdown.Item className='d-flex justify-content-center'>
                <Col xs={3} md={3}>
                    <Image src="https://" roundedCircle />
                </Col>
            </Dropdown.Item>
            <Dropdown.Item  href='/userProfile'>Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Logout jobSeeker={jobSeeker}/>
        </Dropdown.Menu>
        </Dropdown>

      </Container>      
    </Navbar>
  )
}

export default Navigation