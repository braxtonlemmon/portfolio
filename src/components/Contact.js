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
import { H2 } from './shared/Headings.js';

const Icon = styled.a`
  text-decoration: none;
  color: black;
  &:hover {
    color: blue;
  }
  &:focus {
    color: black;
  }

`
const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`

const ContactSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`

class Contact extends Component {
  render() {
    return (
      <ContactWrapper>
        <H2>Contact</H2>
        <ContactSection>
          <Icon href="https://wa.me/32493123308" target="_blank">
            <FaWhatsapp size={"2em"} />
          </Icon>
          <Icon href="tel:+32493123308" target="_blank">
            <FaPhone size={"2em"} />
          </Icon>
          <Icon href="tel:+32493123308" target="_blank">+32 493 12 33 08</Icon>
        </ContactSection>
        <ContactSection>
          <Icon href="mailto:braxtonlemmon@gmail.com" target="_blank">
            <FiMail size={"2em"} />
          </Icon>
          <Icon href="mailto:braxtonlemmon@gmail.com" target="_blank">braxtonlemmon@gmail.com</Icon>
        </ContactSection>
        <ContactSection>
          <Icon href="https://m.me/braxton.lemmon" target="_blank">
            <FaFacebookMessenger size={"2em"} />
          </Icon>
          <Icon href="https://twitter.com/braxtonlemmon" target="_blank">
            <FaTwitter size={"2em"} />
          </Icon>
          <Icon href="https://linkedin.com/in/braxtonlemmon/" target="_blank">
            <FaLinkedinIn size={"2em"} />
          </Icon>
          <Icon href="https://github.com/braxtonlemmon" target="_blank">
            <FaGithub size={"2em"} />
          </Icon>
          <Icon href="https://soundcloud.com/expiredmomentum" target="_blank">
            <FaSoundcloud size={"2em"} />
          </Icon>
        </ContactSection>
      </ContactWrapper>
    );
  }
}

export default Contact;
