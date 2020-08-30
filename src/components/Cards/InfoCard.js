import React from "react";
import { Box, Media } from "react-bulma-components";
import PropTypes from "prop-types";

const InfoCard = ({ image, alt, text, link, imageBackground }) => {
  return (
    <Box>
      <Media>
        <Media.Item>
          <p className="text">{text}</p>
        </Media.Item>
        <Media.Item renderAs="figure" position="right">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img
              src={image}
              className="cardImage"
              style={imageBackground}
              alt={alt}
            />
          </a>
        </Media.Item>
      </Media>
    </Box>
  );
};

InfoCard.propTypes = {
  imageBackground: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default InfoCard;
