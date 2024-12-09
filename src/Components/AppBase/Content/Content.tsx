import { useState } from 'react';

import { Tabs } from '../../../Config/common.config';
import backgroundImg from "../../../Assets/Images/mainbg.png";

import LeftSideNavBar from './LeftSideNavBar/LeftSideNavBar';
import RightSideNavBar from './RightSideNavBar/RightSideNavBar';

import Home from "./Home/Home";
import Experience from './Experience/Experience';
import Education from './Education/Educations';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

import "./Content.css";

const Content = () => {
  const [selectedTab, setSelectedTab] = useState(Tabs.home);
  const getSelectedComponent = () => {
    switch (selectedTab) {
      case Tabs.home: {
        setTimeout(() => {
          
        }, 2000)
        return <Home />;
      }
      case Tabs.experience: {
        return <Experience />;
      }
      case Tabs.education: {
        return <Education />;
      }
      case Tabs.projects: {
        return <Projects />;
      }
      case Tabs.contact: {
        return <Contact />;
      }
      default: {
        return <Home />;
      }
    }
  }

  return (
    <main>
      <div className="layout-container">
        <div className="left-nav-container">
          <LeftSideNavBar />
        </div>

        <div className="content-container">
          <div
            className="background-cover-drop"
            style={{ backgroundImage: `url(${backgroundImg})` }}
          >
            <div className="background-cover-drop-overlay">
              {selectedTab && getSelectedComponent()}
            </div>
          </div>
          <RightSideNavBar
            displayTab={(tab: Tabs) => setSelectedTab(tab)}
            selectedTab={selectedTab}
          />
        </div>
      </div>
    </main>
  );
}

export default Content