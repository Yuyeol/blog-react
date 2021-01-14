import styled from "styled-components";
import React, { useEffect, useRef, useState } from "react";
import { ImSearch } from "react-icons/im";
import { AiFillCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 15px 30px;
  box-shadow: 2px 5px 5px #f4efea;
  background-color: rgba(255, 255, 255, 0.8);
  display: ${(props) => (props.active ? "flex" : "none")};
  align-items: center;
  justify-content: space-between;
  z-index: 10;
`;
const Column = styled.div`
  display: flex;
  align-items: center;
`;
const Home = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  margin-right: 15px;
`;
const ID = styled.div`
  font-size: 30px;
`;
const Search = styled.div`
  font-size: 30px;
`;
const User = styled.img`
  width: 40px;
  height: 40px;
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
  top: 60px;
  right: 28px;
  box-shadow: 1.5px 1.5px 1.5px 1.5px #f4efea;
  border: 1.5px solid #f4efea;
`;
const MoreItem = styled.div`
  font-size: 20px;
`;
const HomeLink = styled(Link)``;
const MoreLink = styled(Link)`
  display: block;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default withRouter(({ location: { pathname } }) => {
  const [moreOpen, setMoreOpen] = useState(false);
  const more = useRef(null);
  const toggleMore = () => {
    setMoreOpen(!moreOpen);
  };
  const handleClickOutside = ({ target }) => {
    if (more && !more.current.contains(target)) setMoreOpen(false);
  };
  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <Container active={pathname !== "/write"}>
      <HomeLink to="/">
        <Column>
          <Home src="https://postfiles.pstatic.net/MjAyMTAxMTRfNDgg/MDAxNjEwNjI0OTc0NTQ3.LFXxoaV7puk7BO0LkL7xroaILMq-BKBd-ykYuMUq5Ycg.ijYSXkw8ZIqJHda-yXehLzGoQqFn8tN8H4Xfa3r2BvMg.PNG.uy23/%EB%A1%9C%EA%B3%A0.png?type=w773" />
          <ID>URE's Blog</ID>
        </Column>
      </HomeLink>
      <Column>
        <Search>
          <ImSearch />
        </Search>
        <More onClick={toggleMore} ref={more}>
          <User src="https://postfiles.pstatic.net/MjAyMTAxMTRfODMg/MDAxNjEwNjI3NTM5NTkx.mqpu51ehbti6TDQotTRu8RgduRxkMN_mdDfENma2aZ0g.rbt0Y7bCruFhKojnJyQVZFfi020qFMo9niFkR1T0ktog.PNG.uy23/brennan-ehrhardt-HALe2SmkWAI-unsplash.png?type=w773" />
          <AiFillCaretDown />
          {moreOpen && (
            <MoreList>
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
          )}
        </More>
      </Column>
    </Container>
  );
});
