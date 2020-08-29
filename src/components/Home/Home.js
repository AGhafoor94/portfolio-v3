import React from "react";
import { Hero, Container, Heading } from "react-bulma-components";
import "./index.css";

const Home = () => {
  return (
    <div>
      <Hero className="background">
        <Hero.Body>
          <Container>
            <Heading>My Portfolio</Heading>
            <Heading subtitle size={4}>
              Welcome to my Portfolio website made in React and using hooks for
              state.
            </Heading>
          </Container>
        </Hero.Body>
      </Hero>
    </div>
  );
};

export default Home;
