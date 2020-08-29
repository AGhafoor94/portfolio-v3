import React from "react";
import { Card, Media, Content, Image, Heading } from "react-bulma-components";
const Cards = ({
  title,
  heading,
  description,
  htmlUrl,
  downloadLink,
  homepage,
  created,
}) => {
  return (
    <Card>
      <Card.Header>
        <Card.Header.Title>{title}</Card.Header.Title>
      </Card.Header>
      <Card.Content>
        <Media>
          <Media.Item renderAs="figure" position="left">
            <Image
              size={64}
              alt="64x64"
              src="http://bulma.io/images/placeholders/128x128.png"
            />
          </Media.Item>
          <Media.Item>
            <Heading size={4}>{heading}</Heading>
            <Heading subtitle size={6}>
              {htmlUrl}
            </Heading>
          </Media.Item>
        </Media>
        <Content>
          {description}
          <br />
          <time dateTime="2016-1-1">{created}</time>
        </Content>
      </Card.Content>
      <Card.Footer>
        <Card.Footer.Item renderAs="a" href={homepage}>
          Homepage of App
        </Card.Footer.Item>
        <Card.Footer.Item renderAs="a" href={downloadLink}>
          Download Link
        </Card.Footer.Item>
      </Card.Footer>
    </Card>
  );
};
export default Cards;
