import React, { Component } from "react";
import styled, { css } from "styled-components";
import GoogleMapReact from "google-map-react";

function MaterialMapView(props) {
  return (
    <Container {...props}>
      <MapView1>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "YOUR_API_KEY" }}
          defaultZoom={4}
          customMapStyle=""
        />
      </MapView1>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: white;
  flex-direction: column;
`;

const MapView1 = styled.div`
  background-color: rgb(230,230,230);
  height: 896px;
  width: 414px;
`;

export default MaterialMapView;
