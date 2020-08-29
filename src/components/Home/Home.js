import React from "react";
import { Hero, Container, Heading, Loader } from "react-bulma-components";

const style = {
  background: {
    backgroundColor: "#24273f",
  },
  text: {
    color: "#ffffff",
  },
};

const Home = () => {
  return (
    <div>
      <Hero style={style.background}>
        <Hero.Body>
          <Container>
            <Heading style={style.text}>My Portfolio</Heading>
            <Heading style={style.text} subtitle size={3}>
              Subtitle
            </Heading>
          </Container>
        </Hero.Body>
      </Hero>
    </div>
  );
};

export default Home;
