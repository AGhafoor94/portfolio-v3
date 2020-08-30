import React from "react";
import "./index.css";
import { Container, Loader } from "react-bulma-components";

const style = {
  width: 100,
  height: 100,
  border: "2px solid orange",
  borderTopColor: "transparent",
  borderRightColor: "transparent",
  display: "block",
  textAlign: "center",
  marginTop: "20%",
};
const LoadingSpinner = () => {
  return (
    <Container fluid className="columns is-centered">
      <Loader style={style} />
    </Container>
  );
};
export default LoadingSpinner;
