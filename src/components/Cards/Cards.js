import React from "react";
import { Card, Content } from "react-bulma-components";
import Moment from "react-moment";
import "./index.css";

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
            <a
              style={{
                textAlign: "center",
              }}
              href={githubUrl}
            >
              {title}
            </a>
          </Card.Header.Title>
        </Card.Header>
        <Card.Content style={{ paddingBottom: 0 }}>
          <Content>
            {description}
            <br />
            <a style={{ float: "left" }} href={sshLink}>
              SSH Link
            </a>
            <a style={{ float: "right" }} href={htmlLink}>
              HTML Link
            </a>
            <br />
            <small
              style={{
                textAlign: "center",
                margin: "10px 0 0 0",
                display: "block",
              }}
            >
              <strong>
                Created: <Moment format="DD/MM/YYYY" date={created} />
              </strong>
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
