import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

import profileImg from "../../../../Assets/Images/profile-pic-circle.png";

import "./LeftSideNavBar.css";

const LeftSideNavBar = () => {
  return (
    <div className="left-side-bar-container">
      <div className="user-container">
        <img alt="profile-image" className="profile-image" src={profileImg} />
        <div className="profile-details">
          <p>VIRAJ ROKADE</p>
          <p>
            Application Developer at ADP
            <br />
            Front-End React Developer
            <br />
          </p>
        </div>
      </div>

      <div className="skills-container"></div>

      <div className="social-media-container">
        <a
          className="social-icon"
          href="https://www.linkedin.com/in/viraj-rokade/"
          target="blank"
        >
          <LinkedInIcon />
        </a>
        <a
          className="social-icon"
          href="https://github.com/viraj-rokade"
          target="blank"
        >
          <GitHubIcon />
        </a>
      </div>
    </div>
  );
};

export default LeftSideNavBar;
