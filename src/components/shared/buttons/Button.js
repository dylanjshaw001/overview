import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.a`
  color: black;
  background-color: #A9A9A9;
  font-weight: 500;
  padding: 5px 10px;
  margin: 2px; 
  display: inline-block;
  border: 1px solid black;
  :hover {
    background-color: #D3D3D3;
  }
  
`
const Button = React.memo((props) => {
  return <StyledButton onClick={props.action}>{props.text}</StyledButton>
});

// Button.propTypes = {
//   action: PropTypes.func,
//   text: PropTypes.string
// }

export default Button; 