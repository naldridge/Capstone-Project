import React from "react";
import styled from "styled-components";
import { Card, Button } from "react-bootstrap";
const GridWrapper2 = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 6em;
  margin-left: 18em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
  background: rgba(255, 255, 255);
`;
const GridWrapper1 = styled.div`
  display: ;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 50em;
  margin-right: 30em;
`;
export const Profile = () => (
  <>
    <GridWrapper2>
      <h2>Profile</h2>
    </GridWrapper2>
    <GridWrapper1>
      <Card className="text-center">
        <Card.Header>Profile</Card.Header>
        <Card.Body>
          <Card.Title>Username:</Card.Title>
          <Card.Title>Password:</Card.Title>
          <Card.Title>Email:</Card.Title>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Button variant="primary">Edit</Button>
        </Card.Footer>
      </Card>
    </GridWrapper1>
  </>
);
