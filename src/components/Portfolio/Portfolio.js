import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Section,
  Container,
  Heading,
  Loader,
  Dropdown,
} from "react-bulma-components";
import Cards from "../Cards/Cards";

const style = {
  loadingStyle: {
    width: 100,
    height: 100,
    border: "2px solid orange",
    borderTopColor: "transparent",
    borderRightColor: "transparent",
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
        <Container fluid>
          {apiData.map((item, index) => {
            return (
              <Cards
                title={item.name}
                created={item.created_at}
                githubUrl={item.html_url}
                description={item.description}
                sshLink={item.ssh_url}
                htmlLink={item.git_url}
              />
            );
          })}
        </Container>
      )}
    </div>
  );
};

export default Portfolio;
