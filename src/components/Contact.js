import React, { Component } from "react";
import styled from "styled-components";
import { FiMail } from 'react-icons/fi';
import { 
  FaLinkedinIn, 
  FaGithub, 
  FaTwitter, 
  FaWhatsapp,
  FaPhone,
  FaSoundcloud,
  FaFacebookMessenger
} from 'react-icons/fa';

const Icon = styled.a`
  text-decoration: none;
  color: black;
`
class Contact extends Component {
  render() {
    return (
      <div>
        <Icon href="https://linkedin.com/in/braxtonlemmon/">
          <FaLinkedinIn size={"2em"} />
        </Icon>
        <Icon href="https://github.com/braxtonlemmon">
          <FaGithub size={"2em"} />
        </Icon>
        <Icon href="https://twitter.com/braxtonlemmon">
          <FaTwitter size={"2em"} />
        </Icon>
        <Icon href="https://wa.me/32493123308">
          <FaWhatsapp size={"2em"} />
        </Icon>
        <Icon href="tel:+32493123308">
          <FaPhone size={"2em"} />
        </Icon>
        <Icon href="mailto:braxtonlemmon@gmail.com">
          <FiMail size={"2em"} />
        </Icon>
        <Icon href="https://soundcloud.com/expiredmomentum">
          <FaSoundcloud size={"2em"} />
        </Icon>
        <Icon href="https://m.me/braxton.lemmon">
          <FaFacebookMessenger size={"2em"} />
        </Icon>
      </div>
    );
  }
}

export default Contact;
