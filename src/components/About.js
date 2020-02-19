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

class About extends Component {
  render() {
    return (
      <div>
        <FaHtml5 size={"2em"} />
        <FaCss3Alt size={"2em"} />
        <FaGitAlt size={"2em"} />
        <FaReact size={"2em"} />
        <FaLinux size={"2em"} />
        <IoLogoJavascript size={"2em"} />
        <FaNpm size={"2em"} />
        <Icon icon={jestIcon} height={"2em"} />
        <Icon icon={webpackIcon} height={"2em"} color="black" />
        <Icon icon={languageRubyOnRails} height={"2em"} color="black" />
        <Icon icon={eslinticon} height={"2em"} color="black" />
        <Icon icon={prettierIcon} height={"2em"} />
        <Icon icon={rubyIcon} height={"2em"} />
        <Icon icon={postgresqlIcon} height={"2em"} />
      </div>
    )
  }
}

export default About;
