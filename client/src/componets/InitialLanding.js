import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function InitialLanding() {
  return (
    <div className="d-flex justify-content-center flex-column bg-black" style={{height: '100vh'}}>
        <div className='d-block'>
            <div className='d-flex justify-content-center'>
                <h4 className='text-white' style={{fontFamily: 'Roboto, sansSerif'}}>WHAT ARE YOU LOOKING FOR?</h4>
            </div>
            <div className='d-flex justify-content-center flex-wrap gap-2'>
                <Link to={'/loginJobSeeker'}>
                    <Button variant="primary" size="lg">
                        Want to get Hired
                    </Button>
                </Link>

                <Link to={'/login'}>
                    <Button variant="secondary" size="lg">
                        Looking for Talent
                    </Button>
                </Link>
            </div>
        </div>
    </div>
  );
}

export default InitialLanding;