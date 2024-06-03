import React, {useState} from 'react'
import {TabPanel, Tabs, TabList, Tab, } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
import logo from '../assets/2.png';
import { Link } from 'react-router-dom';
import { Collapse } from 'react-collapse';

function CompanyDashboard() {
    const [toggle, setToggle] = useState({
        key: "",
        status: false,
    });

    const handleToggle = (key) => {
    if (toggle.key === key) {
      setToggle({
        status: false,
      });
    } else {
      setToggle({
        status: true,
        key,
      });
    }
  };


    
  return (
    <div style={{height: '1000px'}}>
        <div className='d-flex' >
            <div className='me-5'>
                <Link to="/">
                    <img src={logo} alt="Image" />
                </Link>
            </div>
            <Tabs className="tf-tab">
                <TabList className="menu-tab">
                    <Tab   >Title 1</Tab>
                    <Tab  >Title 2</Tab>
                </TabList>

                <TabPanel className="header-ct-center menu-moblie animation-tab">
                    <Link  to={'/'} onClick={() => {
                            handleToggle("home");
                          }}>
                    </Link>
                    <Collapse isOpened={toggle.key === "home"}>
                    <ul
                            className="sub-menu-mobile"
                            style={{
                              display: `${
                                toggle.key === "home" ? "block" : "none"
                              }`,
                            }}
                          >
                            <li className="menu-item menu-item-mobile">
                              <Link to="/">Home Page 01 </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/home_v2">Home Page 02 </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/home_v3">Home Page 03 </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/home_v4">Home Page 04 </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/home_v5">Home Page 05 </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/home_v6">Home Page 06 </Link>
                            </li>
                            <li className="menu-item menu-item-mobile current-item">
                              <Link to="/home_v7">Home Page 07 </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/home_v8">Home Page 08 </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/home_v9">Home Page 09 </Link>
                            </li>
                            <li className="menu-item menu-item-mobile">
                              <Link to="/home_v10">Home Page 10 </Link>
                            </li>
                          </ul>
                    </Collapse>
                </TabPanel>
                <TabPanel className="header-ct-center menu-moblie animation-tab">
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    </div>
  )
}

export default CompanyDashboard