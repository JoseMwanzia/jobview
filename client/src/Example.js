import React, { useEffect, useRef, useState } from 'react';

const ApplicationModal = ({company, jobSeeker}) => {
  // console.log(company);
  const fileInputRef = useRef(null);

  const [pdfFIle, setPdfFile] = useState()

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    
    // Ensure the file input is not null
    if (fileInputRef.current && fileInputRef.current.files[0]) {
      formData.append('application[resume]', fileInputRef.current.files[0]);
    }

    // Add other form data
    formData.append('application[job_seeker_id]', 2);
    formData.append('application[name]', 'John Doe');
    formData.append('application[email]', 'john@example.com');
    formData.append('application[address]', '123 Main St');
    formData.append('application[phone]', '123-456-7890');

    try {
      const response = await fetch('/companies/5/applications', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      console.log('Application submitted:', data);
    } catch (error) {
      console.error('Error submitting application:', error);
    }
  };

useEffect(() => {
  fetch('applications/1')
  .then(res => res.json())
  .then(data => {
    // console.log(data);
    setPdfFile(data)})
}, [])
  

  return (
    <>
    <div>
      {}
    </div>
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" required />
      <input type="email" name="email" placeholder="Email" required />
      <input type="text" name="address" placeholder="Address" required />
      <input type="tel" name="phone" placeholder="Phone" required />
      <input type="file" ref={fileInputRef} name="resume" required />
      <button type="submit">Submit Application</button>
    </form>
  </>
  );
};

export default ApplicationModal;
