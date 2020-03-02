import styled from 'styled-components';

const NavButton = styled.button`
  height: 100%;
  width: 100%;
  padding: 5px;
  background: ${props => props.top ? 'none' : 'white'};
  color: ${props => props.top ? 'white' : 'black'};
  border: none;
  font-size: 1.5em;
  outline: none;
  cursor: pointer;
  box-sizing: 
  &:hover {
    background: ${props => props.top ? 'none' : 'pink'};
    color: ${props => props.top ? 'white' : 'black'};
    border-bottom: ${props => props.top ? '2px solid white' : 'none'};
  }
`;

export default NavButton;