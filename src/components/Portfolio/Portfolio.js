import React, { useState, useEffect } from "react";
import axios from "axios";
import { Section, Container, Heading } from "react-bulma-components";

const Portfolio = () => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    const response = async () => {
      const { data } = await axios.get(
        "https://api.github.com/repos/AGhafoor94"
      );
      console.log(data);
    };
  }, []);
  return (
    <div>
      <Section>
        <Container fluid>
          <p className="bd-notification is-info">
            <Heading size={5} renderAs="p">
              Fluid
            </Heading>
            <Heading subtitle renderAs="p">
              Container
            </Heading>
          </p>
        </Container>
      </Section>
    </div>
  );
};

export default Portfolio;
