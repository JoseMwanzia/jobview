import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ApplicationModal({ company, jobSeeker, post }) {
  const fileInputRef = useRef(null);

  const [applied, setApplied] = useState(false)
  const [success, setSuccess] = useState('')
  const [errors, SetErrors] = useState()
  const [cv, setCv] = useState()
  const [application, setApplication] = useState({
    name: '', email: '', address: '', phone: '', resume: ''
  });
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  
  const handleShow = () => {
    const post_ids = jobSeeker.posts.map(post => post.id);
    const post_id = post.id;
    
    post_ids.includes(post_id) ? setApplied(true) : setApplied(false);
    setShow(true);
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApplication({ ...application, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formPayload = new FormData();
    const post_id = post.id
    formPayload.append('application[post_id]', post_id)

    // Ensure the file input is not null
    if (fileInputRef.current && fileInputRef.current.files[0]) {
      formPayload.append('application[resume]', fileInputRef.current.files[0]);
      console.log("Resume file appended:", fileInputRef.current.files[0].name);
    } else {
      console.error('NO RESUME file uploaded!');
    }

    // Add other form data from application state
    Object.keys(application).forEach((key) => {
      if (key !== 'resume') {
        formPayload.append(`application[${key}]`, application[key]);
      }
    });

    formPayload.append('application[job_seeker_id]', jobSeeker.id);

    fetch(`/companies/${company.id}/applications`, {
      method: 'POST',
      body: formPayload
    })
      .then(response => response.json())
      .then(data => {
        if (data.id > 0) {
          console.log(data.id);
          setTimeout(() => {
            handleClose()
          }, 3000);
        }
      })
      .catch(error => {
        console.error('Error submitting application:', error);
      });
  };

  return (
    <>
    {jobSeekersWhoAppliedForComp.includes(foundEmail) ? (
      <Button disabled variant="success">Applied</Button>
    ) : (
      <Button variant="primary" onClick={handleShow}>Apply</Button>
    )
  }

      <Modal key={company.id} show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Application for {company.company_name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                value={application.name}
                onChange={handleInputChange}
              />
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                name="email"
                value={application.email}
                onChange={handleInputChange}
              />
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Address"
                name="address"
                value={application.address}
                onChange={handleInputChange}
              />
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="number"
                placeholder="Phone Number"
                name="phone"
                value={application.phone}
                onChange={handleInputChange}
              />
              <Form.Label className="mt-2">Upload Resume</Form.Label>
              <Form.Control
                type="file"
                accept=".pdf, .docx, .doc"
                name="resume"
                ref={fileInputRef}
              />
              <small>Accepted file types: pdf, docx, doc</small>
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>

              {jobSeekersWhoAppliedForComp.includes(foundEmail) ? (
                  <Button disabled variant="success">Applied</Button>
                ) : (
                  <Button type="submit" variant="primary">
                    Submit
                  </Button>
                )
              }

            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ApplicationModal;
