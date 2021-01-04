import styled from "styled-components";
import React, { useState } from "react";
import { ImSearch } from "react-icons/im";
import { AiFillCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Column = styled.div`
  display: flex;
  align-items: center;
`;
const Home = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  margin-right: 20px;
`;
const ID = styled.div`
  font-size: 30px;
`;
const Search = styled.div`
  font-size: 30px;
`;
const User = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin: 0 20px;
`;
const More = styled.div`
  color: grey;
  display: flex;
  align-items: center;
  &:hover {
    color: black;
    transition: background-color 0.2s ease-in-out;
  }
`;
const MoreList = styled.div`
  display: ${(props) => (props.active ? "none" : "block")};
  background-color: white;
  width: 200px;
  padding: 10px;
  position: absolute;
  top: 80px;
  right: 31px;
  box-shadow: 1.5px 1.5px 1.5px 1.5px rgba(118, 146, 180, 0.15);
  border: 1.5px solid rgba(118, 146, 180, 0.15);
`;
const MoreItem = styled.div`
  font-size: 28px;
`;
const HomeLink = styled(Link)``;
const MoreLink = styled(Link)`
  display: block;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [moreOpen, setMoreOpen] = useState(false);
  const handleMore = () => {
    if (moreOpen) {
      setMoreOpen(false);
    } else {
      setMoreOpen(true);
    }
  };
  return (
    <Container>
      <HomeLink to="/">
        <Column>
          <Home src="https://postfiles.pstatic.net/MjAyMTAxMDRfMTYx/MDAxNjA5NzQ3NTY4OTYy.HGoHVtVfo3EF5VJJaxTO2w40BkHhmq2msClcmLnEtAsg.EOMyy5P1sU4Mul7jx-Z2Q-0uZs74Sjq3e7oxi0OM5Qgg.PNG.uy23/%EC%A0%9C%EB%AA%A9-%EC%97%86%EC%9D%8C-1.png?type=w773" />
          <ID>URE's Blog</ID>
        </Column>
      </HomeLink>
      <Column>
        <Search>
          <ImSearch />
        </Search>
        <More onClick={handleMore}>
          <User src="https://media.vlpt.us/images/juy23/profile/ed48f224-7e9f-4eb8-9dbc-e5d857fd3b66/social.png?w=120" />
          <AiFillCaretDown />
        </More>
        <MoreList active={!moreOpen}>
          <MoreLink to="/write">
            <MoreItem>새 글 쓰기</MoreItem>
          </MoreLink>
          <MoreLink to="/write">
            <MoreItem>임시 저장함</MoreItem>
          </MoreLink>
          <MoreLink to="/settings">
            <MoreItem>설정</MoreItem>
          </MoreLink>
          <MoreLink to="/write">
            <MoreItem>로그아웃</MoreItem>
          </MoreLink>
        </MoreList>
      </Column>
    </Container>
  );
};
