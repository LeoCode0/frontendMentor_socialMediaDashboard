import React from "react";
import {
  FaTwitter,
  FaFacebookSquare,
  FaInstagram,
  FaYoutube,
  FaCaretUp,
  FaCaretDown,
} from "react-icons/fa";

export const ChooseIcon = (socialNetwork, socialClass='') => {
  let socialClassWithIcon;
  switch (socialNetwork) {
    case "Facebook":
      socialClassWithIcon = `${socialClass} Facebook`
      return <FaFacebookSquare className={socialClassWithIcon} />;
    case "Twitter":
      socialClassWithIcon = `${socialClass} Twitter`
      return <FaTwitter className={socialClassWithIcon} />;
    case "Instagram":
      socialClassWithIcon = `${socialClass} Instagram`
      return <FaInstagram className={socialClassWithIcon} />;
    case "Youtube":
      socialClassWithIcon = `${socialClass} Youtube`
      return <FaYoutube className={socialClassWithIcon} />;
    case "Up":
      return <FaCaretUp />;
    case "Down":
      return <FaCaretDown />;
    default:
      return <h1>{socialNetwork}</h1>;
  }
};
