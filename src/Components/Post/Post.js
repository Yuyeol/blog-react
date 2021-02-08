import styled from "styled-components";
import HTMLReactParser from "html-react-parser";
import { BLACK, PINK } from "styles";
import { FaHeart, FaRegComment, FaRegHeart } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import Comment from "./Comment";
import PostMore from "./PostMore";
import { Link } from "react-router-dom";
import { useContextState } from "context";

const Container = styled.div`
  padding: 20px 30px;
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
  .nick-img {
    width: 32px;
    border-radius: 15px;
  }
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
  svg {
    &:hover {
      color: ${BLACK};
      transition: background-color 0.2s ease-in-out;
    }
  }
`;
const TitleBox = styled.div`
  margin: 15px 0;
  font-size: 24px;
  display: flex;
`;
const Category = styled.div`
  color: grey;
`;
const Bar = styled.div`
  color: lightgrey;
  margin: 0 7px;
`;
const Title = styled.div`
  font-weight: 600;
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

const Post = ({ post, saved }) => {
  // 카테고리 스테이트와 포스트스테이트의 카테고리 값이 같은지 비교후 적용시킴
  // : 카테고리 수정시 동기화가 안되기에 이렇게 설정함.
  const { categories, profile } = useContextState();
  const category = categories.find((c) =>
    post ? c.item === post.category : saved ? c.item === saved.category : null
  );

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
          <img className="nick-img" src={profile.profileImg} alt="PROFILE" />
          <Nick>{profile.nickName}</Nick>
          <Date>
            {post && post.date}
            {saved && saved.date}
          </Date>
        </NickColumn>
        <MoreBox onClick={toggleMore} ref={more}>
          <BsThreeDots />
          {/* 수정, 삭제하는곳 */}
          {moreOpen && (
            <PostMore id={(post && post.id) || (saved && saved.id)} />
          )}
        </MoreBox>
      </PostHead>
      <TitleBox>
        {post && post.category && (
          <>
            <Link to={`/post/${post.category}`}>
              <Category>{category && category.item}</Category>
            </Link>
            {category && <Bar>I</Bar>}
          </>
        )}
        {saved && saved.category && (
          <>
            <Category>{category && category.item}</Category>
            {category && <Bar>I</Bar>}
          </>
        )}
        <Title>
          {post && post.title}
          {saved && saved.title}
        </Title>
      </TitleBox>
      <Contents>
        {post && HTMLReactParser(post.contents)}
        {saved && HTMLReactParser(saved.contents)}
      </Contents>
      {post && post && (
        <StatusBox>
          <StatusIcon onClick={handleHeart}>
            {heart ? <FaHeart color="rgb(237, 73, 86)" /> : <FaRegHeart />}
          </StatusIcon>
          <StatusIcon onClick={handleComment}>
            <FaRegComment />
          </StatusIcon>
          <Like>
            {post && post.like > 0 && `좋아요 ${post && post.like}개`}
          </Like>
          <Dot>{post && post.like && post && post.comments ? "•" : ""}</Dot>
          <Comments>
            {post && post.comments > 0 && `댓글 ${post && post.comments}개`}
          </Comments>
        </StatusBox>
      )}
      {openComment && <Comment />}
    </Container>
  );
};

export default Post;
