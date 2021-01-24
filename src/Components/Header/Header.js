import styled from "styled-components";
import React, { useEffect, useRef, useState } from "react";
import { ImSearch } from "react-icons/im";
import { AiFillCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { PROFILE, LOGO, BLACK } from "styles";
import HeaderMore from "./HeaderMore";

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
const MoreBox = styled.div`
  color: grey;
  display: flex;
  align-items: center;
  &:hover {
    color: ${BLACK};
    transition: background-color 0.2s ease-in-out;
  }
  cursor: pointer;
`;
const HomeLink = styled(Link)``;

// eslint-disable-next-line import/no-anonymous-default-export
export default withRouter(({ location: { pathname } }) => {
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
  return (
    <Container active={pathname.substring(0, 6) !== "/write"}>
      <HomeLink to="/">
        <Column>
          <Home src={LOGO} />
          <ID>URE's Blog</ID>
        </Column>
      </HomeLink>
      <Column>
        <Search>
          <ImSearch />
        </Search>
        <MoreBox onClick={toggleMore} ref={more}>
          <User src={PROFILE} />
          <AiFillCaretDown />
          {moreOpen && <HeaderMore />}
        </MoreBox>
      </Column>
    </Container>
  );
});
