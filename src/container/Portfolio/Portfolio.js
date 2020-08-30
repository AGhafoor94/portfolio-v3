import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "react-bulma-components";
import Cards from "../../components/Cards/Cards";
import LoadingSpinner from "../../components/LoadingSpinner";

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
        <LoadingSpinner />
      ) : (
        <Container fluid>
          {apiData.map((item, index) => {
            return (
              <Cards
                key={index}
                title={item.name}
                created={item.created_at}
                githubUrl={item.html_url}
                description={
                  item.description ? (
                    item.description
                  ) : (
                    <p>NO DESCRIPTION AVAILABLE</p>
                  )
                }
                sshLink={item.ssh_url}
                htmlLink={item.git_url}
                homepage={item.homepage}
              />
            );
          })}
        </Container>
      )}
    </div>
  );
};

export default Portfolio;
