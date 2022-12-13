import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Profile() {
  return (
    <div className="profile_container">
      <div className="profile-nav">
        <div className="profile-nav-title">About me</div>
      </div>
      <img
        className="profile-img"
        src="./images/Bhushan_Bahale.jpg"
        alt="ProfilePicture"
      />
      <div className="profile-content">
        <div className="profile-title">Bhushan Bahale</div>
      </div>

      <div className="profile-desc">
        Hi,
        <br />I am <b>Full Stack Developer</b>.<br />
        <br /> This webpage is also the part of my front-end development
        project.
        <br />
        <br />
        **For such awesome websites....
        <br />
        <br />
        <b className="profile-contact">Contact me</b>
        <br />
        <div className="profile-email">
          <span>
            Email :
            <a0
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:bhushanbahale01@gmail.com"
            >
              bhushanbahale01@gmail.com
            </a0>
          </span>
        </div>
        <div className="profile-social">
          <div className="profile-social-git">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/BhushanVnit"
            >
              <FaGithub />
            </a>
          </div>
          <div className="profile-social-linkedin">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/bhushan-bahale/"
            >
              <FaLinkedin />
            </a>
          </div>
          <div className="profile-social-insta">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/bhushan_bahale/"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
