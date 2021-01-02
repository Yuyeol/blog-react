import styled from "styled-components";
import {
  BsTypeBold,
  BsTypeItalic,
  BsTypeStrikethrough,
  BsTypeUnderline,
  BsLink,
  BsCode,
} from "react-icons/bs";
import { MdFormatQuote, MdInsertPhoto } from "react-icons/md";

const Container = styled.div`
  margin: 100px;
`;
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

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Container>
    <Form>
      <TitleBox>
        <Title type="input" placeholder="제목" />
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
        <Contents placeholder="본문" />
      </ContentsBox>
    </Form>
  </Container>
);
