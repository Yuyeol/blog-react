import React from "react";
import {
  BsTypeBold,
  BsTypeItalic,
  BsTypeStrikethrough,
  BsTypeUnderline,
  BsLink,
  BsCode,
} from "react-icons/bs";
import { MdFormatQuote, MdInsertPhoto } from "react-icons/md";
import styled from "styled-components";

const Form = styled.form``;
const TitleBox = styled.div``;
const Title = styled.input`
  font-size: 40px;
  font-weight: 600;
  border: none;
`;
const FunctionBar = styled.div`
  font-size: 32px;
  display: flex;
  & > div {
    cursor: pointer;
  }
`;
const FunctionIcon = styled.div`
  padding: 15px;
  opacity: 0.7;
`;
const ContentsBox = styled.div``;
const Contents = styled.textarea`
  border: none;
  font-size: 24px;
  width: 100%;
  margin-bottom: 30px;
`;

const WriteForm = ({ handleInputs }) => {
  return (
    <Form>
      <TitleBox>
        <Title
          name="title"
          type="input"
          placeholder="제목"
          onChange={handleInputs}
        />
      </TitleBox>
      <FunctionBar>
        <FunctionIcon>12</FunctionIcon>
        <FunctionIcon>
          <BsTypeBold />
        </FunctionIcon>
        <FunctionIcon>
          <BsTypeItalic />
        </FunctionIcon>
        <FunctionIcon>
          <BsTypeStrikethrough />
        </FunctionIcon>
        <FunctionIcon>
          <BsTypeUnderline />
        </FunctionIcon>
        <FunctionIcon>
          <MdFormatQuote />
        </FunctionIcon>
        <FunctionIcon>
          <BsLink />
        </FunctionIcon>
        <FunctionIcon>
          <MdInsertPhoto />
        </FunctionIcon>
        <FunctionIcon>
          <BsCode />
        </FunctionIcon>
      </FunctionBar>
      <ContentsBox>
        <Contents name="contents" placeholder="본문" onChange={handleInputs} />
      </ContentsBox>
    </Form>
  );
};

export default WriteForm;
