import React from "react";
import { Link } from "react-router-dom";
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
  return (
    <MoreList>
      <MoreLink to={`/write/${id}`}>
        <MoreItem>수정</MoreItem>
      </MoreLink>
      <MoreLink to="/">
        <MoreItem>삭제</MoreItem>
      </MoreLink>
    </MoreList>
  );
};

export default PostMore;
