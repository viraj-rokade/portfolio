import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';

import { Tabs } from "../../../../Config/common.config";
import "./RightSideNavBar.css";

const RightSideNavBar = (props: { displayTab: (tab: Tabs) => void, selectedTab: Tabs }) => {
  const [barExpanded, setBarExpanded] = useState(false);

  return (
    <div
      className={`right-side-bar-container ${barExpanded ? "expanded" : ""}`}
    >
      <div
        className="menu-container"
        onClick={() => setBarExpanded((prevState) => !prevState)}
      >
        <span
          className={`options-icon menu-icon ${
            barExpanded ? "hidden" : "visible"
          }`}
        >
          <MenuIcon fontSize="large" />
        </span>

        <span
          className={`options-icon close-icon ${
            barExpanded ? "visible" : "hidden"
          }`}
        >
          <CloseIcon fontSize="large" />
        </span>
      </div>

      <div className="tabs-container">
        <div
          className={`tab-link ${barExpanded ? "visible" : "hidden"}`}
          onClick={() => {
            setBarExpanded((prevState) => !prevState);
            props.displayTab(Tabs.home);
          }}
        >
          <span className="link-span">{Tabs.home}</span>
        </div>
        <div
          className={`tab-link ${barExpanded ? "visible" : "hidden"}`}
          onClick={() => {
            setBarExpanded((prevState) => !prevState);
            props.displayTab(Tabs.experience);
          }}
        >
          <span className="link-span">{Tabs.experience}</span>
        </div>
        <div
          className={`tab-link ${barExpanded ? "visible" : "hidden"}`}
          onClick={() => {
            setBarExpanded((prevState) => !prevState);
            props.displayTab(Tabs.education);
          }}
        >
          <span className="link-span">{Tabs.education}</span>
        </div>
        <div
          className={`tab-link ${barExpanded ? "visible" : "hidden"}`}
          onClick={() => {
            setBarExpanded((prevState) => !prevState);
            props.displayTab(Tabs.projects);
          }}
        >
          <span className="link-span">{Tabs.projects}</span>
        </div>
        <div
          className={`tab-link ${barExpanded ? "visible" : "hidden"}`}
          onClick={() => {
            setBarExpanded((prevState) => !prevState);
            props.displayTab(Tabs.contact);
          }}
        >
          <span className="link-span">{Tabs.contact}</span>
        </div>
        <div className={`selected-tab ${barExpanded ? "hidden" : "visible"}`}>
          <span className="selected-tab-span">{props.selectedTab}</span>
        </div>
      </div>
    </div>
  );
};

export default RightSideNavBar;