import styled from "styled-components";
import React, { useEffect, useRef, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { BLACK } from "styles";
import HeaderMore from "./HeaderMore";
import logoImg from "Assets/logo.png";
import { useContextState } from "context";

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
  .home {
    width: 40px;
    height: 40px;
    border-radius: 5px;
    margin-right: 15px;
  }
`;
const ID = styled.div`
  font-size: 30px;
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
  .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 0 20px;
  }
`;
const HomeLink = styled(Link)``;

const Header = ({ location: { pathname } }) => {
  const { profile } = useContextState();
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
          <img className="home" src={logoImg} alt="HOME" />
          <ID>{profile.blogName}</ID>
        </Column>
      </HomeLink>
      <Column>
        <MoreBox onClick={toggleMore} ref={more}>
          <img className="user" src={profile.profileImg} alt="Profile" />
          <AiFillCaretDown />
          {moreOpen && <HeaderMore />}
        </MoreBox>
      </Column>
    </Container>
  );
};

export default withRouter(Header);
