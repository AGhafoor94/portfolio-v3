import React from "react";
import { Box, Media } from "react-bulma-components";
import PropTypes from "prop-types";

const InfoCard = ({ image, alt, text }) => {
  return (
    <Box>
      <Media>
        <Media.Item>
          <p className="text">{text}</p>
        </Media.Item>
        <Media.Item renderAs="figure" position="right">
          <img src={image} className="cardImage" alt={alt} />
        </Media.Item>
      </Media>
    </Box>
  );
};

InfoCard.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default InfoCard;
