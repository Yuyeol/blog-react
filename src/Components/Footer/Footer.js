import React from "react";
import styled from "styled-components";
import { PINK, RED } from "styles";

const Container = styled.div`
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  .text-box {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${RED};
    color: ${PINK};
  }
`;

const Footer = () => {
  return (
    <Container>
      <div className="text-box">BLOG • Designed by URE • 2021</div>
    </Container>
  );
};

export default Footer;
