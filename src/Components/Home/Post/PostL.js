import styled from "styled-components";
import HTMLReactParser from "html-react-parser";
import { PINK } from "styles";
import { FaHeart, FaRegComment, FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import Comment from "./Comment";

const Container = styled.div`
  padding: 20px;
  border: 2px solid ${PINK};
  width: 100%;
  margin-bottom: 10px;
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 30px;
  margin: 15px 0;
`;
const Date = styled.div`
  font-size: 20px;
`;
const Contents = styled.div`
  & img {
    width: 100%;
  }
`;
const StatusBox = styled.div`
  margin-top: 15px;
  display: flex;
  font-size: 20px;
`;
const StatusIcon = styled.div`
  font-size: 24px;
  margin-right: 10px;
  display: flex;
  align-items: center;
`;
const Like = styled.div``;
const Comments = styled.div``;
const Dot = styled.div`
  padding: 0 8px;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ title, contents, date, like, comments }) => {
  const [openComment, setOpenComment] = useState(true);
  const [heart, setHeart] = useState(false);
  const handleComment = () => {
    setOpenComment(!openComment);
  };
  const handleHeart = () => {
    setHeart(!heart);
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Date>{date}</Date>
      <Contents>{HTMLReactParser(contents)}</Contents>
      <StatusBox>
        <StatusIcon onClick={handleHeart}>
          {heart ? <FaHeart color="rgb(237, 73, 86)" /> : <FaRegHeart />}
        </StatusIcon>
        <StatusIcon onClick={handleComment}>
          <FaRegComment />
        </StatusIcon>
        <Like>{like > 0 && `좋아요 ${like}개`}</Like>
        <Dot>{like && comments ? "•" : ""}</Dot>
        <Comments>{comments > 0 && `댓글 ${comments}개`}</Comments>
      </StatusBox>
      {openComment && <Comment />}
    </Container>
  );
};
