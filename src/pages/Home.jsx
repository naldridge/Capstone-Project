import React from "react";
import styled from "styled-components";
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
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 30em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;
const GridWrapper3 = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 6em;
  margin-left: 18em;
  margin-right: 6em;
  grid-template-rows: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
  background: rgba(255, 255, 255);
`;
export const Home = () => (
  <>
    <GridWrapper2>
      <h2>Home</h2>
    </GridWrapper2>
    <GridWrapper3>
      <h2>Welcome to fetch-dev()</h2>
      <p>
        You can explore all of the wonderful communities with just a click of a
        button
      </p>
      <p>I am a kitty cat, sup, feed me, no cares in the world</p>
      <p>Meow meow, I tell my human purr for no reason but to chase after</p>
    </GridWrapper3>{" "}
    <GridWrapper1>
      <p>
        State at ceiling lay on arms while you're using the keyboard so this
        human feeds me.
      </p>
      <p>I am a kitty cat, sup, feed me, no cares in the world</p>
      <p>Meow meow, I tell my human purr for no reason but to chase after</p>
    </GridWrapper1>{" "}
  </>
);
