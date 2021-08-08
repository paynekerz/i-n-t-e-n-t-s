import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialMapView from "../components/MaterialMapView";
import Login from "../components/Login";

function LoginPage(props) {
  return (
    <Container>
      <MaterialMapViewStack>
        <MaterialMapView
          style={{
            width: 414,
            height: 896,
            position: "absolute",
            left: 0,
            top: 0
          }}
        ></MaterialMapView>
        <Login
          style={{
            position: "absolute",
            left: 70,
            top: 198,
            width: 275,
            height: 500
          }}
        ></Login>
      </MaterialMapViewStack>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(49,65,49,1);
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const MaterialMapViewStack = styled.div`
  width: 414px;
  height: 896px;
  position: relative;
`;

export default LoginPage;
