import styled from "styled-components";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 30px;
  box-shadow: 2px 5px 5px rgba(16, 24, 32, 0.15);
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 30px;
`;
const SubmitBox = styled.div``;
const ExitLabel = styled.div`
  cursor: pointer;
`;
const SaveLabel = styled.label`
  margin-left: 15px;
  background-color: rgba(16, 24, 32, 0.1);
  color: rgb(16, 24, 32);
  padding: 10px 20px;
  border-radius: 100px;
  font-weight: 600;
  cursor: pointer;
`;
const PublishLabel = styled.label`
  margin-left: 15px;
  background-color: #1a7a4c;
  color: white;
  padding: 10px 20px;
  border-radius: 100px;
  font-weight: 600;
  cursor: pointer;
`;
const Save = styled.button`
  display: none;
`;
const Publish = styled.button`
  display: none;
`;
const HomeLink = styled(Link)``;

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ handleSubmit }) => {
  return (
    <Container>
      <HomeLink to="/">
        <ExitLabel>
          <AiOutlineArrowLeft /> 나가기
        </ExitLabel>
      </HomeLink>
      <SubmitBox>
        <SaveLabel htmlFor="save">임시저장</SaveLabel>
        <Save id="save" />
        <PublishLabel htmlFor="publish" onClick={handleSubmit}>
          발행하기
        </PublishLabel>
        <Publish id="publish" />
      </SubmitBox>
    </Container>
  );
};
