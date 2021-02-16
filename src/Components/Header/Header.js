import styled from "styled-components";
import React, { useEffect, useRef, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { BLACK, PINK } from "styles";
import HeaderMore from "./HeaderMore";
import logoImg from "Assets/logo.png";
import { useContextState } from "context";

const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 15px 30px;
  box-shadow: 2px 5px 5px ${PINK};
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
  cursor: pointer;
  &:hover {
    color: ${BLACK};
    transition: background-color 0.2s ease-in-out;
  }
  .img-box {
    width: 40px;
    height: 40px;
    overflow: hidden;
    background-color: ${BLACK};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    margin: 0 20px;
    .user {
      height: 40px;
    }
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
          <div className="img-box">
            <img className="user" src={profile.profileImg} alt="Profile" />
          </div>
          <AiFillCaretDown />
          {moreOpen && <HeaderMore />}
        </MoreBox>
      </Column>
    </Container>
  );
};

export default withRouter(Header);
