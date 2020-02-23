import React, { Component } from "react";
import styled from "styled-components";
import { 
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaReact,
  FaLinux,
  FaNpm
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { Icon } from '@iconify/react';
import jestIcon from '@iconify/icons-cib/jest';
import webpackIcon from '@iconify/icons-cib/webpack';
import languageRubyOnRails from '@iconify/icons-mdi/language-ruby-on-rails';
import eslinticon from '@iconify/icons-mdi/eslint';
import prettierIcon from '@iconify/icons-cib/prettier';
import rubyIcon from '@iconify/icons-cib/ruby';
import postgresqlIcon from '@iconify/icons-cib/postgresql';
import mySvg from '../Ableton.svg';

const AboutWrapper = styled.div`
  margin: 10px 50px;
  display: flex;
  flex-wrap: wrap;
`

const Stamp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5px;
  border: 4px dotted black;
  padding: 5px;
  border-radius: 20px;
  height: 110px;
  width: 110px;
`

const Label = styled.h3`
  margin-top: 5px;
`

const Abletons = styled.div`
  height: 3.5em;
  width: 3.5em;
  background-image: url(${mySvg});
`

class About extends Component {

  
  render() {
    const size = "3.5em";
    return (
      <AboutWrapper>
        <Stamp>
          <Abletons></Abletons>
          <Label>Ableton Live</Label>
        </Stamp>

        <Stamp>
          <FaHtml5 size={size} />  
          <Label>HTML5</Label>
        </Stamp>
        <Stamp>
          <FaCss3Alt size={size} />
          <Label>CSS3</Label>
        </Stamp>
        <Stamp>
          <FaGitAlt size={size} />
          <Label>Git</Label>
        </Stamp>
        <Stamp>
          <FaReact size={size} />
          <Label>React</Label>
        </Stamp>
        <Stamp>
          <FaLinux size={size} />
          <Label>Linux</Label>
        </Stamp>
        <Stamp>
          <IoLogoJavascript size={size} />
          <Label>JavaScript</Label>
        </Stamp>
        <Stamp>
          <FaNpm size={size} />
          <Label>npm</Label>
        </Stamp>
        <Stamp>
          <Icon icon={jestIcon} height={size} />
          <Label>Jest</Label>
        </Stamp>
        <Stamp>
          <Icon icon={webpackIcon} height={size} color="black" />
          <Label>webpack</Label>
        </Stamp>
        <Stamp>
          <Icon icon={languageRubyOnRails} height={size} color="black" />
          <Label>Ruby on Rails</Label>
        </Stamp>
        <Stamp>
          <Icon icon={eslinticon} height={size} color="black" />
          <Label>ESLint</Label>
        </Stamp>
        <Stamp>
          <Icon icon={prettierIcon} height={size} />
          <Label>Prettier</Label>
        </Stamp>
        <Stamp>
          <Icon icon={rubyIcon} height={size} />
          <Label>Ruby</Label>
        </Stamp>
        <Stamp>
          <Icon icon={postgresqlIcon} height={size} />
          <Label>PostgreSQL</Label>
        </Stamp>
      </AboutWrapper>
    )
  }
}

export default About;
