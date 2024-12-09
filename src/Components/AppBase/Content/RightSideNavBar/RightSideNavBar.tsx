import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';

import { Tabs } from "../../../../Config/common.config";
import "./RightSideNavBar.css";

const RightSideNavBar = (props: { displayTab: (tab: Tabs) => void, selectedTab: Tabs }) => {
  const [barExpanded, setBarExpanded] = useState(false);
  const [shouldRenderSelectedTab, setShouldRenderSelectedTab] = useState(true);
  const [shouldRenderAllTabs, setShouldRenderAllTabs] = useState(false);

  const handleTransitionEnd = () => {
    if (!barExpanded) {
      setShouldRenderSelectedTab(true);
      setShouldRenderAllTabs(false); 
    } else {
      setShouldRenderSelectedTab(false);
      setShouldRenderAllTabs(true); 
    }
  };

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
        {shouldRenderAllTabs && Object.keys(Tabs).map((key, index) => {
          return (
            <div
              key={index}
              className={`tab-link ${barExpanded ? "visible" : "hidden"}`}
              onTransitionEnd={handleTransitionEnd}
            >
              <span
                className="link-span"
                onClick={() => {
                  setBarExpanded((prevState) => !prevState);
                  props.displayTab(Tabs[key as keyof typeof Tabs]);
                }}
              >
                {Tabs[key as keyof typeof Tabs]}
              </span>
            </div>
          );
        })}
        {shouldRenderSelectedTab && (
          <div
            className={`selected-tab ${barExpanded ? "hidden" : "visible"}`}
            onTransitionEnd={handleTransitionEnd}
          >
            <span className="selected-tab-span">{props.selectedTab}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default RightSideNavBar;