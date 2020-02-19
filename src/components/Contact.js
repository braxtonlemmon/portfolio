import React, { Component } from "react";
import styled from "styled-components";

class Contact extends Component {
  render() {
    return (
      <div>
        <h3>Email:</h3>
        <a href="mailto:braxtonlemmon@gmail.com">braxtonlemmon@gmail.com</a>
        <h3>Phone:</h3>
        <span>+32 493 12 33 08</span>
      </div>
    );
  }
}

export default Contact;
