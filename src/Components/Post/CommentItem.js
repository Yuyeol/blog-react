import { useContextDispatch, useContextState } from "context";
import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { COMMENT_D } from "reducer";
import styled from "styled-components";
import { BLACK, PINK } from "styles";

const Container = styled.div`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  .user-box {
    padding: 3px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${PINK};
    .user-profile {
      display: flex;
      align-items: center;
      font-size: 16px;
      img {
        width: 20px;
        border-radius: 10px;
        margin-right: 5px;
      }
      .date {
        margin-left: 10px;
        color: grey;
        font-size: 14px;
      }
    }
    .delete {
      font-size: 14px;
      color: grey;
      &:hover {
        color: ${BLACK};
        font-weight: 600;
        transition: all 0.2s ease-in-out;
      }
    }
  }
  .comment-box {
    margin-left: 23px;
  }
`;

const CommentItem = ({
  post: { id: pId },
  comment: { writer, date, comment, id: cId },
}) => {
  const { profile } = useContextState();
  const dispatch = useContextDispatch();
  const handleDeleteCo = () => {
    dispatch({ type: COMMENT_D, payload: { cId, pId } });
  };
  return (
    <Container>
      <div className="user-box">
        <div className="user-profile">
          <img src={profile.profileImg} alt="PROFILE" />
          {writer}
          <div className="date">{date}</div>
        </div>
        <div className="delete" onClick={handleDeleteCo}>
          <RiDeleteBinLine />
        </div>
      </div>
      <div className="comment-box">
        <div className="comment">{comment}</div>
      </div>
    </Container>
  );
};

export default CommentItem;
