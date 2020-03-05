import React from "react";
import styled from "styled-components";
import { H2 } from './shared/Headings.js';
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
  font-size: 1.3rem;
`;

const ContactSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  padding: 10px;
  background: #e1e1e1;
  box-shadow: 5px 5px 3px grey, -5px 5px 3px grey;
`;
const Banana = styled.img`
  height: 10em;
  width: 10em;
`

const BananaSection = styled.div`
  width: 85%;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  animation: load_up 2s forwards;

  @keyframes load_up {
    from {
      transform: scale(0.1);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  } 

  @media only screen and (min-width: 43em) {
    width: 50%;
  }

`

const Contact = () => {
  const size = '2em';
  return (
    <ContactWrapper>
      <H2>Contact</H2>
      {/* <ContactSection>
        <Icon href="https://wa.me/32493123308" target="_blank">
          <FaWhatsapp size={size} />
        </Icon>
        <Icon href="tel:+32493123308" target="_blank">
          <FaPhone size={size} />
        </Icon>
        <Link href="tel:+32493123308" target="_blank">+32 493 12 33 08</Link>
      </ContactSection> */}
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
      {/* <BananaSection>
        <Banana
          src={process.env.PUBLIC_URL + 'img/banana.png'}
        />
        <H2>Don&#39;t be a green banana, contact me!</H2>
      </BananaSection>     */}
    </ContactWrapper>
  );
}

export default Contact;
