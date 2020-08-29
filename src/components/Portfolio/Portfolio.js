import React, { useState, useEffect } from "react";
import axios from "axios";
import { Section, Container, Heading, Loader } from "react-bulma-components";

const style = {
  loadingStyle: {
    width: 100,
    height: 100,
    border: "2px solid orange",
    borderTopColor: "transparent",
    borderRightColor: "transparent",
    display: "block",
    align: "center",
    textAlign: "center",
    marginTop: "20%",
  },
};
const Portfolio = () => {
  const [apiData, setApiData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const response = async () => {
        const { data } = await axios.get(
          "https://api.github.com/users/AGhafoor94/repos"
        );
        setApiData(data);
        console.log(apiData);
        setLoading(false);
      };
      response();
    } catch (error) {
      console.log(error);
    }
  }, [loading]);

  return (
    <div>
      {loading ? (
        <Container fluid className="columns is-centered">
          <Loader style={style.loadingStyle} />
        </Container>
      ) : (
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
      )}
    </div>
  );
};

export default Portfolio;
