import React from "react";
import InfoCard from "../Cards/InfoCard";
import { Section } from "react-bulma-components";
import Images from "../../images";
import "./index.css";

const Contact = () => {
  return (
    <div>
      <Section>
        <InfoCard
          image={Images.GitHub}
          alt="Github Icon"
          text="You can contact me or view my details on github. Click the icon to view my github page"
        />
      </Section>
    </div>
  );
};

export default Contact;
