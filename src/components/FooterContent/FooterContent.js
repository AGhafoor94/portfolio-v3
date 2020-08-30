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
            <Content className="footerText" style={{ textAlign: "center" }}>
              <p>Portfolio Website made by Adnan Ghafoor</p>
              <a
                href="https://github.com/AGhafoor94/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Images.GitHub}
                  className="footerImage leftImage"
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
                  className="footerImage rightImage"
                  alt="Linkedin link"
                />
              </a>
            </Content>
          </Container>
        </Footer>
      </Hero.Footer>
    </div>
  );
};
export default FooterContent;
