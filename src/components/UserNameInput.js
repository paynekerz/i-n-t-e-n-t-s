import React, { Component } from "react";
import styled, { css } from "styled-components";

function UserNameInput(props) {
  return (
    <Container {...props}>
      <Username>EMAIL</Username>
      <InputStyle placeholder="Input"></InputStyle>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  border-bottom-width: 1px;
  border-color: rgba(32,32,32,1);
  flex-direction: column;
`;

const Username = styled.span`
  font-family: Saira Stencil One;
  font-size: 12px;
  text-align: left;
  color: rgba(32,32,32,1);
  opacity: 0.6;
  padding-top: 16px;
`;

const InputStyle = styled.input`
  font-family: Saira Stencil One;
  color: rgba(32,32,32,1);
  font-size: 12px;
  align-self: stretch;
  flex: 1 1 0%;
  line-height: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  border: none;
  background: transparent;
  display: flex;
  flex-direction: column;
`;

export default UserNameInput;
