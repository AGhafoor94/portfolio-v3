import React from "react";
import "./index.css";
import Images from "../../images";
import { Hero, Container, Content, Footer } from "react-bulma-components";

const FooterContent = () => {
  return (
    <div>
      <Hero.Footer>
        <Footer>
          <Container>
            <Content style={{ textAlign: "center" }}>
              <a
                href="https://github.com/AGhafoor94/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Images.GitHub}
                  width="5%"
                  style={{ float: "right" }}
                  alt="Github link"
                />
              </a>
              <a
                href="https://uk.linkedin.com/in/adnan-ghafoor-9bb42b1aa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Images.LinkedIn}
                  width="5%"
                  style={{ float: "left" }}
                  alt="Linkedin link"
                />
              </a>
              <p>Portfolio Website made by Adnan Ghafoor</p>
            </Content>
          </Container>
        </Footer>
      </Hero.Footer>
    </div>
  );
};
export default FooterContent;
