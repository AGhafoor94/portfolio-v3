import React from "react";
import InfoCard from "../Cards/InfoCard";
import { Section } from "react-bulma-components";
import { GitHub, LinkedIn } from "../../images";
import "./index.css";

const Contact = () => {
  return (
    <div>
      <Section>
        <InfoCard
          image={GitHub}
          imageBackground={{ backgroundColor: "#333333" }}
          alt="Github Icon"
          text="You can contact me or view my details on Github. Click the icon to view my Github page"
          link="https://github.com/AGhafoor94"
        />
        <InfoCard
          image={LinkedIn}
          imageBackground={{ backgroundColor: "#ffffff" }}
          alt="Linkedin Icon"
          text="You can contact me or view my details on Linkedin. Click the icon to view my Linkedin page"
          link="https://uk.linkedin.com/in/adnan-ghafoor-9bb42b1aa"
        />
      </Section>
    </div>
  );
};

export default Contact;
