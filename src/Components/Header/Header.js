import styled from "styled-components";
import React from "react";

import HomeHeader from "./HomeHeader";
// import WriteHeader from "./WriteHeader";

const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100%;

  padding: 15px 30px;
  box-shadow: 2px 5px 5px rgba(16, 24, 32, 0.15);
  background-color: rgba(255, 255, 255, 0.8);
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <Container>
      <HomeHeader />
      {/* <WriteHeader /> */}
    </Container>
  );
};
