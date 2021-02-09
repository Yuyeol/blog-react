import styled from "styled-components";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { withRouter } from "react-router-dom";
import { PINK, RED } from "styles";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 18px;
  box-shadow: 2px 5px 5px ${PINK};
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 24px;
  z-index: 1;
`;
const SubmitBox = styled.div``;
const ExitLabel = styled.div`
  cursor: pointer;
  font-weight: 600;
`;
const SaveLabel = styled.label`
  margin-left: 15px;
  background: ${PINK};
  box-shadow: 4px 4px 4px rgba(84, 84, 86, 0.15);
  color: rgb(16, 24, 32);
  padding: 10px 20px;
  border-radius: 100px;
  font-weight: 600;
  cursor: pointer;
`;
const PublishLabel = styled.label`
  margin-left: 15px;
  background: ${RED};
  box-shadow: 4px 4px 4px rgba(84, 84, 86, 0.15);
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
const Exit = styled.span``;

const WriteHeader = ({ history, handleSubmit, handleSave, findPost }) => {
  const handleExit = () => {
    history.goBack();
  };
  return (
    <Container>
      <Exit onClick={handleExit}>
        <ExitLabel>
          <AiOutlineArrowLeft /> 나가기
        </ExitLabel>
      </Exit>
      <SubmitBox>
        {!findPost && (
          <SaveLabel htmlFor="save" onClick={handleSave}>
            임시저장
          </SaveLabel>
        )}
        <Save id="save" />
        <PublishLabel htmlFor="publish" onClick={handleSubmit}>
          {findPost ? "수정하기" : "발행하기"}
        </PublishLabel>
        <Publish id="publish" />
      </SubmitBox>
    </Container>
  );
};

export default withRouter(WriteHeader);
