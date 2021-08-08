import React, { Component } from "react";
import styled, { css } from "styled-components";
// import MaterialMapView from "../components/MaterialMapView";
// import Login from "../components/Login";
import UserNameInput from "../components/UserNameInput";
import PasswordInput from "../components/PasswordInput";


function LoginPage(props) {
  return (
    <Wrapper>
    <Container {...props}>

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

      <button>LOGIN</button>
      <button>SIGNUP</button>
    </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`

`


const Container = styled.div`
  display: flex;
  position: absolute;
  top:500px;
  margin:;
  background-color: rgba(49,65,49,1);
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

const Login1 = styled.span`
  // font-style: normal;
  // font-weight: 400;
  // color: rgba(224,161,0,1);
  // font-size: 25px;
  // width: 74px;
  // height: 39px;
  // margin-top: 4px;
  // margin-left: 63px;
`;

const Signup = styled.span`
  // font-style: normal;
  // font-weight: 400;
  // color: rgba(32,32,32,1);
  // font-size: 20px;
  // margin-top: 114px;
  // margin-left: 104px;
`;

const buttonStyles = styled.div`

const MaterialMapViewStack = styled.div
  width: 414px;
  height: 896px;
  position: relative;
`;

export default LoginPage;
