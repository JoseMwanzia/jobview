import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { formatDistanceToNow, parseISO } from 'date-fns';

function Applicants({myCompany, selectedPost, show, setShow, fullscreen}) {

  // Conditional rendering based on loading state and fetched data.
  // (VERY IMPORTANT IF YOU DONT WANT THE INITIAL 'undefined' RETURN VALUE FROM myCompany state)
  if (loading) {
    return <h3>Loading...</h3>;
  }
  if (!myCompany || myCompany.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <>
      {/* {seekers} */}
      <div className='d-inline'>
        <Button className="me-2 mb-2" onClick={() => {onHandleShow(true);
          if (!data) {
            return <h4>Loading</h4>
          }
          setData(post);
          console.log(post);
        }}>
          Show Applicants
        </Button>
      
        <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>{post.title}</Modal.Title>
            <Modal.Title><img /></Modal.Title>
          </Modal.Header>
          <Modal.Body>

          </Modal.Body>
        </Modal>
      </div>
    </>
    )
  }


export default Applicants;