import styled from "styled-components";
import HTMLReactParser from "html-react-parser";
import { PINK } from "styles";

const Container = styled.div`
  padding: 20px;
  border: 2px solid ${PINK};
  width: 100%;
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 40px;
  margin: 15px 0;
`;
const Contents = styled.div`
  & img {
    width: 100%;
  }
`;
const StatusBox = styled.div`
  margin-top: 15px;
  display: flex;
`;
const Date = styled.div``;
const Like = styled.div``;
const Comments = styled.div``;
const Dot = styled.div`
  padding: 0 8px;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ title, contents, date, like, comments }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Contents>{HTMLReactParser(contents)}</Contents>
      <StatusBox>
        <Date>{date}</Date>
        <Dot>•</Dot>
        <Like>{`좋아요 ${like}개`}</Like>
        <Dot>•</Dot>
        <Comments>{`댓글 ${comments}개`}</Comments>
      </StatusBox>
    </Container>
  );
};
