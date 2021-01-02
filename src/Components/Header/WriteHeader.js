import styled from "styled-components";
import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Container = styled.header``;
const BtnBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 30px;
  bottom: 0;
  padding: 15px 0;
`;
const SubmitBox = styled.div``;
const ExitLabel = styled.label`
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
const Exit = styled.button`
  display: none;
`;
const Save = styled.button`
  display: none;
`;
const Publish = styled.button`
  display: none;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <Container>
      {/* 
        
        
        버튼이 form 태그 밖에 있어서
        nput submit 못하고 button으로 했는데 받아올때 가능할지 모르겠다.
        그래도 해보자.
        
        
        
        */}
      <BtnBox>
        <ExitLabel htmlFor="exit">
          <AiOutlineArrowLeft /> 나가기
        </ExitLabel>
        <Exit id="exit" />
        <SubmitBox>
          <SaveLabel htmlFor="save">임시저장</SaveLabel>
          <Save id="save" />
          <PublishLabel htmlFor="publish">발행하기</PublishLabel>
          <Publish id="publish" />
        </SubmitBox>
      </BtnBox>
    </Container>
  );
};
