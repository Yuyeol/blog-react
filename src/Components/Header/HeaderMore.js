import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MoreList = styled.div`
  display: block;
  background-color: white;
  width: 200px;
  padding: 10px;
  position: absolute;
  top: 60px;
  right: 28px;
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

const HeaderMore = () => {
  return (
    <MoreList>
      <MoreLink to="/write">
        <MoreItem>새 글 쓰기</MoreItem>
      </MoreLink>
      <MoreLink to="/saved">
        <MoreItem>임시 저장함</MoreItem>
      </MoreLink>
      <MoreLink to="/settings">
        <MoreItem>설정</MoreItem>
      </MoreLink>
    </MoreList>
  );
};

export default HeaderMore;
