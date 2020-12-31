import styled from "styled-components";
import React, { useState } from "react";
import { ImSearch } from "react-icons/im";
import { AiFillCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";

const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 15px 30px;
  box-shadow: 2px 5px 5px rgba(118, 146, 180, 0.15);
  background-color: rgba(255, 255, 255, 0.8);
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
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
const SLink = styled(Link)``;

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
      <Column>
        <Home src="https://pbs.twimg.com/profile_images/1228368893321736193/Ov0og7E8_400x400.jpg" />
        <ID>URE's Blog</ID>
      </Column>
      <Column>
        <Search>
          <ImSearch />
        </Search>
        <More onClick={handleMore}>
          <User src="https://media.vlpt.us/images/juy23/profile/ed48f224-7e9f-4eb8-9dbc-e5d857fd3b66/social.png?w=120" />
          <AiFillCaretDown />
        </More>
        <MoreList active={!moreOpen}>
          <SLink to="/write">
            <MoreItem>새 글 작성</MoreItem>
          </SLink>
          <MoreItem>임시 글</MoreItem>
          <SLink to="/settings">
            <MoreItem>설정</MoreItem>
          </SLink>
          <MoreItem>로그아웃</MoreItem>
        </MoreList>
      </Column>
    </Container>
  );
};
