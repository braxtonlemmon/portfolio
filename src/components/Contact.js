import React from "react";
import styled from "styled-components";
import { H2 } from './shared/Headings.js';
import { FiMail } from 'react-icons/fi';
import { 
  FaLinkedinIn, 
  FaGithub, 
  FaTwitter, 
  FaSoundcloud,
  FaFacebookMessenger
} from 'react-icons/fa';

const Icon = styled.a`
  text-decoration: none;
  color: #464646;
  margin: 5px;
  &:hover {
    color: blue;
  }
  &:focus {
    color: #464646;
  }
`;

const Link = styled.a`
  color: black;
  text-decoration: none;
  margin: 5px;
  &:hover {
    color: blue;
  }
`
const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2rem;
  @media only screen and (min-width: 23em) {
    font-size: 1.4rem;
  }
`;

const ContactSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  padding: 10px;
  background: #e1e1e1;
  box-shadow: 5px 5px 3px grey, -5px 5px 3px grey;
`;

const Contact = () => {
  const size = '2em';
  return (
    <ContactWrapper>
      <H2>Contact</H2>
      <ContactSection>
        <Icon href="mailto:braxtonlemmon@gmail.com" target="_blank">
          <FiMail size={size} />
        </Icon>
        <Link href="mailto:braxtonlemmon@gmail.com" target="_blank">braxtonlemmon@gmail.com</Link>
      </ContactSection>
      <ContactSection>
        <Icon href="https://m.me/braxton.lemmon" target="_blank">
          <FaFacebookMessenger size={size} />
        </Icon>
        <Icon href="https://twitter.com/braxtonlemmon" target="_blank">
          <FaTwitter size={size} />
        </Icon>
        <Icon href="https://linkedin.com/in/braxtonlemmon/" target="_blank">
          <FaLinkedinIn size={size} />
        </Icon>
        <Icon href="https://github.com/braxtonlemmon" target="_blank">
          <FaGithub size={size} />
        </Icon>
        <Icon href="https://soundcloud.com/expiredmomentum" target="_blank">
          <FaSoundcloud size={size} />
        </Icon>
      </ContactSection>
    </ContactWrapper>
  );
}

export default Contact;
