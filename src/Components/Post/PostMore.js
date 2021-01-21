import { useContextDispatch } from "context";
import React from "react";
import { Link } from "react-router-dom";
import { DELETE } from "reducer";
import styled from "styled-components";

const MoreList = styled.div`
  display: block;
  background-color: white;
  width: 80px;
  padding: 10px;
  position: absolute;
  top: 30px;
  right: -5px;
  box-shadow: 1.5px 1.5px 1.5px 1.5px #f4efea;
  border: 1.5px solid #f4efea;
`;
const MoreItem = styled.div`
  font-size: 20px;
`;
const MoreLink = styled(Link)`
  display: block;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

const PostMore = ({ id }) => {
  const dispatch = useContextDispatch();
  const handleDelete = () => {
    dispatch({
      type: DELETE,
      payload: { id },
    });
  };
  return (
    <MoreList>
      <MoreLink to={`/write/${id}`}>
        <MoreItem>수정</MoreItem>
      </MoreLink>
      <MoreItem onClick={handleDelete}>삭제</MoreItem>
    </MoreList>
  );
};

export default PostMore;
