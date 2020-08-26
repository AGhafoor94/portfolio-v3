import React from "react";
import "./index.css";
import { Hero, Container, Content, Footer } from "react-bulma-components";

const FooterContent = () => {
  return (
    <div>
      <Hero.Footer>
        <Footer>
          <Container>
            <Content style={{ textAlign: "center" }}>
              <p>Portfolio Website made by Adnan Ghafoor</p>
            </Content>
          </Container>
        </Footer>
      </Hero.Footer>
    </div>
  );
};
export default FooterContent;
