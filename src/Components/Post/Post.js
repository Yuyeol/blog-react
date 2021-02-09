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
  .nick-column {
    display: flex;
    align-items: center;
    font-size: 24px;
    .nick-img {
      width: 32px;
      border-radius: 15px;
    }
    .nick {
      margin: 0 10px;
    }
    .date {
      font-size: 16px;
      color: grey;
    }
  }
  .more-box {
    font-size: 24px;
    color: grey;
    cursor: pointer;
    svg {
      &:hover {
        color: ${BLACK};
        transition: color 0.2s ease-in-out;
      }
    }
  }
`;
const TitleBox = styled.div`
  margin: 15px 0;
  font-size: 24px;
  display: flex;
  .category {
    color: grey;
  }
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
  font-size: 16px;
  .icon-box {
    margin-top: 8px;
    display: flex;
    .icon {
      font-size: 24px;
      margin-right: 10px;
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  }
  .status {
    display: flex;
  }
  .dot {
    padding: 0 8px;
    color: grey;
  }
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
        <div className="nick-column">
          <img className="nick-img" src={profile.profileImg} alt="PROFILE" />
          <div className="nick">{profile.nickName}</div>
          <div className="date">
            {post && post.date}
            {saved && saved.date}
          </div>
        </div>
        <div className="more-box" onClick={toggleMore} ref={more}>
          <BsThreeDots />
          {/* 수정, 삭제하는곳 */}
          {moreOpen && (
            <PostMore id={(post && post.id) || (saved && saved.id)} />
          )}
        </div>
      </PostHead>
      <TitleBox>
        {post && post.category && (
          <>
            <Link to={`/post/${post.category}`}>
              <div className="category">{category && category.item}</div>
            </Link>
            {category && <Bar>I</Bar>}
          </>
        )}
        {saved && saved.category && (
          <>
            <div className="category">{category && category.item}</div>
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
      <StatusBox>
        <div className="status">
          <div className="like">{heart && `좋아요 1개`}</div>
          {post && heart && post.comments.length > 0 && (
            <div className="dot">•</div>
          )}
          <div className="comment">
            {post &&
              post.comments.length > 0 &&
              `댓글 ${post && post.comments.length}개`}
          </div>
        </div>
        <div className="icon-box">
          <div className="icon" onClick={handleHeart}>
            {heart ? <FaHeart color="rgb(237, 73, 86)" /> : <FaRegHeart />}
          </div>
          <div className="icon" onClick={handleComment}>
            <FaRegComment />
          </div>
        </div>
      </StatusBox>
      {openComment && <Comment post={post} />}
    </Container>
  );
};

export default Post;
