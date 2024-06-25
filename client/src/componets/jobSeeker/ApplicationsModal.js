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
      setCv('RESUME file NOT uploaded!');
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
      .then(response =>  {
        if (response.ok) {
          response.json().then(data => {
            console.log(data);
            setSuccess("You have Successfully Applied!");
            setTimeout(() => {
              handleClose()
            }, 3000);
        })
        } else {
          response.json().then(data => {
            SetErrors(data);
          })
        }
      })
      .catch(error => {
        console.error('Error submitting application:', error);
      });
  };

  return (
    <>
    {jobSeeker.posts.map(post => post.id).includes(post.id) ? <Button className='z-1' disabled variant="success">Applied</Button> : 
      <Button variant="primary" className='z-1' onClick={handleShow}>Apply</Button>}

      <Modal key={company.id} show={show} onHide={handleClose} backdrop='static'>
        <Modal.Header closeButton>
          <Modal.Title>Application for <p className='text-dark text-decoration-underline d-inline'>{post.title}</p> <br/> <Button disabled className='btn-success'>at {company.company_name}</Button></Modal.Title>
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
              <Form.Text className='text-danger'>{errors ? `Name ${errors.name}` : ''}</Form.Text><br/>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                name="email"
                value={application.email}
                onChange={handleInputChange}
              />
              <Form.Text className='text-danger'>{errors ? `Email ${errors.email}` : ''}</Form.Text><br/>
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Address"
                name="address"
                value={application.address}
                onChange={handleInputChange}
              />
              <Form.Text className='text-danger'>{errors ? `Address ${errors.address}` : ''}</Form.Text><br/>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="number"
                placeholder="Phone Number"
                name="phone"
                value={application.phone}
                onChange={handleInputChange}
              />
              <Form.Text className='text-danger'>{errors ? `Phone ${errors.phone}` : ''}</Form.Text><br/>
              <Form.Label className="mt-2">Upload Resume</Form.Label>
              <Form.Control
                type="file"
                accept=".pdf, .docx, .doc"
                name="resume"
                ref={fileInputRef}
              />
              <Form.Text className='text-danger'>{cv ? `${cv}` : ''}</Form.Text><br/>
              <small>Accepted file types: pdf, docx, doc</small>
            </Form.Group>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>

              {applied ? (
                  <Button disabled variant="success">Applied</Button>
                ) : (success ? (<Button type="submit" variant="success">
                  {success}
                  </Button>
                )
                   :
                  (<Button type="submit" variant="primary">
                    Submit
                  </Button>)
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
