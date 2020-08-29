import React from "react";
import { Card, Content } from "react-bulma-components";
const Cards = ({
  title,
  githubUrl,
  description,
  sshLink,
  htmlLink,
  homepage,
  created,
}) => {
  return (
    <div style={{ marginTop: "10px", marginBottom: "10px" }}>
      <Card>
        <Card.Header>
          <Card.Header.Title>
            <a href={githubUrl}>{title}</a>
          </Card.Header.Title>
        </Card.Header>
        <Card.Content>
          <Content>
            {description}
            <br />
            <a href={sshLink}>SSH Link</a>
            <br />
            <a href={htmlLink}>HTML Link</a>
            <br />
            <small>
              <time dateTime="2016-1-1">Created: {created}</time>
            </small>
          </Content>
        </Card.Content>
        <Card.Footer>
          <Card.Footer.Item renderAs="a" href={homepage}>
            Homepage of App
          </Card.Footer.Item>
        </Card.Footer>
      </Card>
    </div>
  );
};
export default Cards;
