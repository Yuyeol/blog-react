import React from "react";
import styled from "styled-components";
import { PINK, PROFILE } from "styles";

const CommentBox = styled.div`
  border: 2px solid ${PINK};
  border-radius: 5px;
  margin-top: 10px;
  padding: 5px 10px;
`;
const Nick = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  border-bottom: 1px solid ${PINK};
`;
const NickImg = styled.img`
  width: 20px;
  border-radius: 10px;
  margin-right: 5px;
`;
const CommentForm = styled.form``;
const CommentInput = styled.textarea`
  margin: 5px 0;
  width: 100%;
  resize: none;
  border: none;
  height: 20px;
  &:focus {
    outline: none;
    height: 70px;
    transition: height 0.5s;
  }
`;
const SubmitBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Submit = styled.input`
  border: none;
  font-size: 16px;
  background-color: white;
  color: grey;
  border-radius: 5px;
  padding: 2px 5px;
  font-weight: 600;
  margin-bottom: 5px;
`;

const Comment = () => {
  return (
    <CommentBox>
      <Nick>
        <NickImg src={PROFILE} />
        URE
      </Nick>
      <CommentForm>
        <CommentInput placeholder="댓글을 입력해보세요!" />
        <SubmitBox>
          <Submit type="submit" value="등록" />
        </SubmitBox>
      </CommentForm>
    </CommentBox>
  );
};

export default Comment;
