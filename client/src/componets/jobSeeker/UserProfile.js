import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Navigation from './Navigation';
import Container from 'react-bootstrap/esm/Container';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { useState, useRef } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import InputGroup from 'react-bootstrap/InputGroup';

function UserProfile({jobSeeker}) {
  const [formData, setFormData] =useState({
    image: ''
  })
  const uploadedImage = useRef(null)
  const imageUploader = useRef(null)

  const [open, setOpen] = useState(false);

   
  function handleImageUpload(event) {
    const [file] = event.target.files
    if (file) {
      const reader = new FileReader(); // reader constructor

      const {current} = uploadedImage; // current from the uploadedImage represents the img element
      current.file = file;

      reader.onload = (e) => {
          current.src = e.target.result;
      } // attach an onload event listener to the reader we created which when loaded will attach the file url it will read to the img element
      reader.readAsDataURL(file); // read the file as URL
    }
    // console.log(file);
  }

  async function handleImage(e) {
    e.preventDefault();

    const formPayload = new FormData();

    if (imageUploader.current && imageUploader.current.files[0]) {
      formPayload.append('job_seeker[image]', imageUploader.current.files[0]);
      console.log("Image appended:", imageUploader.current.files[0].name);
    } 

    const id = jobSeeker.id
    try {
      fetch(`/job_seeker/${id}`, {
      method: 'POST',
      body: formPayload
    })
      .then(response =>  {
        if (response.ok) {
          response.json().then(data => {
            console.log(data);
            
        })
        } else {
          response.json().then(data => {
            // SetErrors(data);
          })
        }
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <Navigation jobSeeker={jobSeeker}/>
    <div className='col-lg-5 col-md-5 m-3'>
    <Card>
      <Card.Header>
        <Nav variant="tabs" defaultActiveKey="#first">
          <Nav.Item>
            <Nav.Link href="#first">Profile</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#">Account</Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>

      <Card.Body id='link'>
        <Card.Title>Update your Profile</Card.Title>
        <Container>
          <Row>

            <Form onSubmit={handleImage}>
              <input ref={imageUploader} style={{display: 'none'}} type='file' accept='image/*' onChange={handleImageUpload} multiple={false}/>
              <div onClick={() => imageUploader.current.click()} style={{height: "60px", width: "60px", border: "2px dashed black"}}>
                <img ref={uploadedImage}  style={{height: "100%", width: "100%"
                  // , position: 'absolute'
                  , aspectRatio: '3/2',
                  objectFit:'contain'
                }}/>
              </div>
              
              <div className='my-2'>
                <Button
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                >
                  Change Password
                </Button>
                <Collapse in={open}>

                  <Form.Group as={Row} className="mb-2">
                    
                    <InputGroup className="mb-3">
                      <Form.Control
                        placeholder="Current Password"
                        aria-label="current password"
                        type='password'
                        id='currentPassword'
                      />
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <Form.Control
                        placeholder="New Password"
                        aria-label="current password"
                        type='password'
                        id='newPassword'
                      />
                    </InputGroup>

                    <InputGroup className="mb-3">
                      <Form.Control
                        placeholder="Confirm New Password"
                        aria-label="current password"
                        type='password'
                        id='confirmNewPassword'
                      />
                    </InputGroup>

                  </Form.Group>
                </Collapse>
                    <Button className='col-3' type='submit'>Submit</Button>
              </div>
            </Form>

          </Row>
        </Container>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    </>
  );
}

export default UserProfile;