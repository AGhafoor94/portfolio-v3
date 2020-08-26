import React from "react";
import { Hero, Heading, Section, Container } from "react-bulma-components";

const Home = () => {
  return (
    <div>
      <Section>
        <Hero color="primary">
          <Hero.Body>
            <Container>
              <Heading>Hero title Primary</Heading>
              <Heading subtitle size={3}>
                Subtitle
              </Heading>
            </Container>
          </Hero.Body>
        </Hero>
      </Section>
    </div>
  );
};

export default Home;
