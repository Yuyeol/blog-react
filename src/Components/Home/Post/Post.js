import styled from "styled-components";
import HTMLReactParser from "html-react-parser";
import { PINK, PROFILE } from "styles";
import { FaHeart, FaRegComment, FaRegHeart } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import Comment from "./Comment";
import PostMore from "./PostMore";

const Container = styled.div`
  padding: 20px;
  border: 2px solid ${PINK};
  width: 100%;
  margin-bottom: 10px;
`;
const PostHead = styled.div`
  border-bottom: 1px solid ${PINK};
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;
const NickColumn = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
`;
const NickImg = styled.img`
  width: 32px;
  border-radius: 15px;
`;
const Nick = styled.div`
  margin: 0 10px;
`;
const Date = styled.div`
  font-size: 16px;
  color: grey;
`;
const MoreBox = styled.div`
  font-size: 24px;
  color: grey;
  cursor: pointer;
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 30px;
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
export default ({ id, title, contents, date, like, comments }) => {
  const [moreOpen, setMoreOpen] = useState(false);
  const more = useRef(null);
  const toggleMore = () => {
    setMoreOpen(!moreOpen);
  };
  const handleClickOutside = ({ target }) => {
    if (more.current && !more.current.contains(target)) setMoreOpen(false);
  };
  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const [openComment, setOpenComment] = useState(false);
  const [heart, setHeart] = useState(false);
  const handleComment = () => {
    setOpenComment(!openComment);
  };
  const handleHeart = () => {
    setHeart(!heart);
  };

  return (
    <Container>
      <PostHead>
        <NickColumn>
          <NickImg src={PROFILE} />
          <Nick>URE</Nick>
          <Date>{date}</Date>
        </NickColumn>
        <MoreBox onClick={toggleMore} ref={more}>
          <BsThreeDots />
          {moreOpen && <PostMore id={id} />}
        </MoreBox>
      </PostHead>
      <Title>{title}</Title>
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
