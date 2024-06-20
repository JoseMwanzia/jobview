import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import ReactQuill from 'react-quill'; 
import 'react-quill/dist/quill.snow.css';

function CreateJobsForm({ show, myCompany }) {
  const [success, setSuccess] = useState('');

  const quillRefs = {
    jobDescription: useRef(null),
    responsibilities: useRef(null),
    qualifications: useRef(null),
    skills: useRef(null),
    bonusSkills: useRef(null),
    comments: useRef(null),
  };

  const [jobPostings, setJobPostings] = useState({
    title: '',
    department: '',
    jobDescription: '',
    responsibilities: '',
    qualifications: '',
    skills: '',
    bonusSkills: '',
    experience: '',
    location: '',
    jobType: '',
    remote: '',
    comments: '',
  });

  const BLUE = 'rgba(0, 0, 255, 0.6)';

  function ContextAwareToggle({ children, eventKey, callback }) {
    const { activeEventKey } = useContext(AccordionContext);
    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey),
    );
    const isCurrentEventKey = activeEventKey === eventKey;

    return (
      <button
        type="button"
        style={{ backgroundColor: isCurrentEventKey ? BLUE : '#0d6efd' }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }

  const handleInputChange = (value, name) => {
    setJobPostings({ ...jobPostings, [name]: value });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const company_id = myCompany.id;

    try {
      const response = await fetch(`/posts/${company_id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(jobPostings, { company_id })
      });

      const data = await response.json()

      if (data.errors === undefined) {
        console.log(data);
        setSuccess('Job Successfully Posted!')
        setErrors('')
      } else {
        console.log(data.errors);
        setErrors(data.errors)
      }
    }

  return (
    <>
      <Accordion defaultActiveKey="0">
        <div className='col-md-6 m-3'>
          <Card>
            <Card.Header>
              <ContextAwareToggle eventKey="1"> <small className="text-light rounded">CREATE</small></ContextAwareToggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <Form show={show}>
                  <Form.Group as={Col} controlId="title">
                    <Form.Label>Job Title:<span className="text-danger">*</span></Form.Label>
                    <Form.Control name='title' value={jobPostings.title} onChange={(e) => handleInputChange(e.target.value, 'title')} rows={1} as='textarea' placeholder="Job Title" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="department">
                    <Form.Label>Department:<span className="text-danger">*</span></Form.Label>
                    <Form.Control name='department' value={jobPostings.department} onChange={(e) => handleInputChange(e.target.value, 'department')} rows={1} as='textarea' placeholder="Department" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="Description">
                    <Form.Label>Job Description:<span className="text-danger">*</span></Form.Label>
                    <ReactQuill ref={quillRefs.jobDescription} name='Description' value={jobPostings.jobDescription} onChange={(value) => handleInputChange(value, 'jobDescription')} placeholder='Write Job Description here' theme='snow'/>
                  </Form.Group>

                  <Form.Group as={Col} controlId="Responsibilities">
                    <Form.Label>Key Responsibilities:<span className="text-danger">*</span></Form.Label>
                    <ReactQuill ref={quillRefs.responsibilities} name='Responsibilities' value={jobPostings.responsibilities} onChange={(value) => handleInputChange(value, 'responsibilities')} placeholder='Write the key responsibilities for the candidate here' theme='snow'/>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Qualifications:<span className="text-danger">*</span></Form.Label>
                    <ReactQuill ref={quillRefs.qualifications} value={jobPostings.qualifications} onChange={(value) => handleInputChange(value, 'qualifications')} placeholder='Write Qualifications needed here' theme='snow'/>
                  </Form.Group><br/>

                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Skills:</Form.Label>
                    <ReactQuill ref={quillRefs.skills} value={jobPostings.skills} onChange={(value) => handleInputChange(value, 'skills')} placeholder='Write Skills required here' theme='snow'/>
                  </Form.Group><br/>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Nice to Have:</Form.Label>
                    <ReactQuill ref={quillRefs.bonusSkills} value={jobPostings.bonusSkills} onChange={(value) => handleInputChange(value, 'bonusSkills')} placeholder='Write Nice to Have here' theme='snow'/>
                  </Form.Group><br/>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Experience Level:<span className="text-danger">*</span></Form.Label>
                    <Form.Select value={jobPostings.experience} onChange={(e) => handleInputChange(e.target.value, 'experience')} >
                      <option value="choose" disabled>Choose...</option>
                      <option value="entry">Entry-level</option>
                      <option value="mid">Mid-level</option>
                      <option value="senior">Senior-level</option>
                    </Form.Select>
                  </Form.Group><br/>

                  <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Job Location:<span className="text-danger">*</span></Form.Label>
                    <Form.Control value={jobPostings.location} onChange={(e) => handleInputChange(e.target.value, 'location')} rows={1} as='textarea' placeholder="Job Location" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Job Type:<span className="text-danger">*</span></Form.Label>
                    <Form.Select value={jobPostings.jobType} onChange={(e) => handleInputChange(e.target.value, 'jobType')} >
                      <option value="choose" disabled>Choose...</option>
                      <option value="full-time">Full-time</option>
                      <option value="part-time">Part-time</option>
                      <option value="contract">Contract</option>
                      <option value="temporary">Temporary</option>
                      <option value="internship">Internship</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Remote:<span className="text-danger">*</span></Form.Label>
                    <Form.Select value={jobPostings.remote} onChange={(e) => handleInputChange(e.target.value, 'remote')} >
                      <option value="Choose" disabled>Choose...</option>
                      <option value="remote">Remote</option>
                      <option value="hybrid">Hybrid</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Additional comments:</Form.Label>
                    <ReactQuill ref={quillRefs.comments} value={jobPostings.comments} onChange={(value) => handleInputChange(value, 'comments')} theme='snow' placeholder='Put additional comments here!'/>
                  </Form.Group>

                  <Form.Group className="my-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>

                  {success ? (<Button variant="success" disabled>
                    {success}
                  </Button>) : <Button variant="primary" type="submit" onClick={handleSubmit}>
                    Post Job
                  </Button>}
                </Form>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </div>
      </Accordion>
    </>
  );
}

export default CreateJobsForm;
