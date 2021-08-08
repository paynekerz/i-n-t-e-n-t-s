import React, { Component } from "react";
import styled, { css } from "styled-components";

function LastPostBox(props) {
  return (
    <Container {...props}>
      <Rect>
        <Username>USERNAME</Username>
        <UserPost>User Post...</UserPost>
      </Rect>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Rect = styled.div`
  width: 340px;
  height: 83px;
  background-color: rgba(113,129,97,1);
  border-width: 1px;
  border-color: #000000;
  border-radius: 5px;
  flex-direction: column;
  display: flex;
  border-style: solid;
  box-shadow: 3px 3px 10px  1px rgba(0,0,0,1) ;
`;

const Username = styled.span`
  font-family: Saira Stencil One;
  font-style: normal;
  font-weight: 400;
  color: rgba(224,161,0,1);
  height: 18px;
  width: 330px;
  text-align: center;
  font-size: 16px;
  margin-left: 5px;
`;

const UserPost = styled.span`
  font-family: Saira Stencil One;
  font-style: normal;
  font-weight: 400;
  color: rgba(32,32,32,1);
  height: 65px;
  width: 330px;
  margin-left: 5px;
`;

export default LastPostBox;
