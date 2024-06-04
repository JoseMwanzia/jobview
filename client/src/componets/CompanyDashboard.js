import React from 'react'
import { Tabs, TabList, Tab, } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
import logo from '../assets/imgLogo.png';
import { Link } from 'react-router-dom';
import DropdownContent from './DropdownContent';

function CompanyDashboard() {
    

    
  return (
    <div style={{height: '1000px'}}>
        <div className='d-flex' >
          <div className='me-5' >
              <Link to="/" >
                  <img style={{width: "55%", aspectRatio: "3/2", objectFit: 'contain'}} src={logo} alt="Image"/>
              </Link>
          </div>
          <Tabs>
            <TabList>
              <Tab>
                <div className="tab-dropdown">
                  Title 1
                  <DropdownContent  />
                </div>
              </Tab>
              <Tab>
                <div className="tab-dropdown">
                  Title 2
                  <DropdownContent />
                </div>
              </Tab>
              <Tab>
                <div className="tab-dropdown">
                  Title 3
                  <DropdownContent />
                </div>
              </Tab>
            </TabList>
          </Tabs>
        </div>
    </div>
  )
}

export default CompanyDashboard