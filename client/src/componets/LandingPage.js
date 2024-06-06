import landingLogo from '../assets/slider2.png';
import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';

import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import SplitButton from 'react-bootstrap/SplitButton';

function LandingPage() {
  return (
    <>
        <section>
            <div>
                <div>
                <div className='row'>
                    <div className='col-lg-12'>
                        <div className='landingLogo'>
                            <div className="heading text-center">
                                <h2 className="text-white">Find the job that fits your life</h2>
                                <p className="text-white px-3">
                                Jobview is a true performance-based job board. Enjoy
                                custom hiring products and access to up to 10,000 new resume
                                registrations daily, with no subscriptions or user licences.
                                </p>
                            </div>

                        </div>
                    </div>
                    </div>

                    <div className='group-search col-md-8 col-lg-6 col-10 rounded mx-auto'>
                        <InputGroup className="mb-3">
                                <Form.Control aria-label="Text input with dropdown button" />

                            <div className='group-search-btn'>
                                <SplitButton
                                variant="outline-secondary"
                                title="Location"
                                id="segmented-button-dropdown-2"
                                alignRight
                                >
                                    <Dropdown.Item href="#">Action</Dropdown.Item>
                                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                    {/* <Dropdown.Divider /> */}
                                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                                </SplitButton>
                            </div>

                        </InputGroup>
                    </div>
                </div>
            </div>
        </section>
    </>
)
}

export default LandingPage;