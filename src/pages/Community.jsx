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
export const Community = () => (
  <>
    <GridWrapper2>
      <h2>Community</h2>
    </GridWrapper2>
  </>
);
