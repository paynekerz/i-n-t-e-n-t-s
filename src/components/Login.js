import React, { Component } from "react";
import styled, { css } from "styled-components";
import UserNameInput from "./UserNameInput";
import PasswordInput from "./PasswordInput";

function Login(props) {
  return (
    <Container {...props}>
      <Tents1Row>
        <Tents1>TENTS</Tents1>
        <Tents1Filler></Tents1Filler>
        <In1>IN</In1>
      </Tents1Row>
      <Button1>
        <ButtonOverlay>
          <Login1>LOGIN</Login1>
        </ButtonOverlay>
      </Button1>
      <UserNameInput
        style={{
          width: 199,
          height: 70,
          marginTop: -223,
          marginLeft: 38
        }}
      ></UserNameInput>
      <PasswordInput
        style={{
          width: 199,
          height: 70,
          marginLeft: 38
        }}
      ></PasswordInput>
      <Signup>SIGNUP</Signup>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(113,129,97,1);
  opacity: 0.9;
  border-radius: 25px;
  flex-direction: column;
  box-shadow: 3px 3px 10px  1px rgba(0,0,0,1) ;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const Tents1 = styled.span`
  font-family: Saira Stencil One;
  font-style: normal;
  font-weight: 400;
  color: rgba(32,32,32,1);
  font-size: 42px;
  width: 182px;
  height: 54px;
  // text-align: left;
  margin-left: 93px;
`;

const Tents1Filler = styled.div`
  flex: 1 1 0%;
  flex-direction: row;
  display: flex;
`;

const In1 = styled.span`
  font-family: Saira Stencil One;
  // font-style: normal;
  // font-weight: 400;
  color: rgba(224,161,0,1);
  font-size: 42px;
  // width: 93px;
  // height: 54px;
  // text-align: right;
  // margin-right: 182px;
`;

const Tents1Row = styled.div`
  height: 54px;
  flex-direction: row;
  display: flex;
  margin-top: 50px;
`;

const Button1 = styled.div`
  width: 199px;
  height: 47px;
  background-color: rgba(32,32,32,1);
  border-radius: 5px;
  flex-direction: column;
  display: flex;
  margin-top: 221px;
  margin-left: 38px;
  border: none;
  box-shadow: 3px 3px 5px  1px rgba(0,0,0,1) ;
`;

const Login1 = styled.span`
  font-family: Saira Stencil One;
  font-style: normal;
  font-weight: 400;
  color: rgba(224,161,0,1);
  font-size: 25px;
  width: 74px;
  height: 39px;
  margin-top: 4px;
  margin-left: 63px;
`;

const Signup = styled.span`
  font-family: Saira Stencil One;
  font-style: normal;
  font-weight: 400;
  color: rgba(32,32,32,1);
  font-size: 20px;
  margin-top: 114px;
  margin-left: 104px;
`;

export default Login;
