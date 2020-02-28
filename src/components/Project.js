import React, { Component } from 'react';
import styled from 'styled-components';
import CardInfo from './CardInfo.js';


const Card = styled.div`
  position: relative;
  height: 400px;
  width: 300px;
  border: 2px solid black;
  justify-self: center;
  display: grid;
  box-shadow: 4px 5px 3px #979797;
  grid-template-rows: 1fr 50px;
  &:after {
    content: '';
    background: url(${props => props.imgUrl});
    background-size: cover;
    background-position-x: ${props => props.imgXY.x};
    background-position-y: ${props => props.imgXY.y};
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
  &:hover:after {
    opacity: 0.3;
  }
`;

const Buttons = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 15px;
  grid-row: 2 / span 1;
  margin: 0 auto 20px auto;

`;

const Button = styled.a`
  border-radius: 5px;
  border: 2px solid black;
  height: 35px;
  width: 85px;
  background: red;
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
  &:hover {
    background: pink;
  }
`

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }
  
  handleMouseEnter() {
    this.setState({isHovered: true});
  }

  handleMouseLeave() {
    this.setState({isHovered: false});
  }

  render() {
    const card = this.props.card;
    return (
        <Card
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          onClick={this.handleClick}
          imgUrl={process.env.PUBLIC_URL + `${card.img}`}
          imgXY={{x: card.x, y: card.y}}
        >
          {this.state.isHovered && <CardInfo info={card.info} />}
          <Buttons>
            <Button
              href={card.github}
              target="_blank"
            >GITHUB</Button>
            {card.isLive &&
              <Button
                href={card.live}
                target="_blank"
              >LIVE</Button>}
          </Buttons>
        </Card>
    )
  }
}
export default Project;