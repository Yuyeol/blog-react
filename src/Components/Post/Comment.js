import React, { useState } from "react";
import styled from "styled-components";
import { PINK } from "styles";
import { useContextDispatch, useContextState } from "context";
import CommentItem from "./CommentItem";
import { COMMENT_C } from "reducer";

const Container = styled.div``;
const CommentsBox = styled.div`
  border: 2px solid ${PINK};
  border-radius: 5px;
  margin-top: 10px;
  padding: 15px 10px;
`;
const InputBox = styled.div`
  border: 2px solid ${PINK};
  border-radius: 5px;
  margin-top: 5px;
  padding: 5px 10px;
  .nick {
    display: flex;
    align-items: center;
    font-size: 20px;
    border-bottom: 1px solid ${PINK};
    img {
      width: 20px;
      border-radius: 10px;
      margin-right: 5px;
    }
  }
  .comment-input {
    margin: 5px 0;
    width: 100%;
    resize: none;
    border: none;
    height: 50px;
    &:focus {
      outline: none;
    }
  }
  .submit-box {
    display: flex;
    justify-content: flex-end;
    .submit {
      font-size: 16px;
      color: grey;
      font-weight: 600;
      cursor: pointer;
    }
  }
`;

const Comment = ({ post }) => {
  const { profile } = useContextState();
  const dispatch = useContextDispatch();
  const [inputCo, setInputCo] = useState("");
  const handleInputCo = ({ target: { value } }) => {
    setInputCo(value);
  };
  const handleSubmitCo = () => {
    dispatch({ type: COMMENT_C, payload: { inputCo, id: post.id } });
    setInputCo("");
  };
  return (
    <Container>
      {post.comments.length === 0 ? (
        <div className="blank"></div>
      ) : (
        <CommentsBox>
          {post.comments.map((c) => (
            <CommentItem key={c.id} comment={c} post={post} />
          ))}
        </CommentsBox>
      )}
      <InputBox>
        <div className="nick">
          <img src={profile.profileImg} alt="PROFILE" />
          {profile.nickName}
        </div>
        <div className="comment-form">
          <textarea
            className="comment-input"
            placeholder="댓글을 입력해보세요!"
            value={inputCo}
            onChange={handleInputCo}
          />
          <div className="submit-box">
            <div className="submit" onClick={handleSubmitCo}>
              등록
            </div>
          </div>
        </div>
      </InputBox>
    </Container>
  );
};

export default Comment;
