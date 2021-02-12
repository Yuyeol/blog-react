import { useContextState } from "context";
import React from "react";
import { HiOutlineHome } from "react-icons/hi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BLACK, PINK, RED } from "styles";

const Container = styled.div`
  background-color: white;
  width: 1000px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 8px 15px;
`;

const MenuBox = styled.div`
  font-weight: 600;
  color: grey;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  & span:hover {
    color: ${BLACK};
    transition: color 0.5s ease;
  }
  .menu-column {
    display: flex;
    padding: 5px 0;
    span {
      &:nth-child(2) {
        margin: 0 4px;
        color: ${PINK};
      }
    }
  }
`;

const RedLine = styled.div`
  height: 3px;
  width: 100%;
  box-sizing: border-box;
  background-color: ${RED};
  bottom: 0;
  left: 0;
`;

const MenuBar = () => {
  const { saved } = useContextState();
  return (
    <Container>
      <MenuBox>
        <div className="menu-column">
          <Link to="/">
            <span>
              <HiOutlineHome />
              홈으로
            </span>
          </Link>
        </div>
        <div className="menu-column">
          <Link to="/saved">
            <span>임시저장함 ({saved.length})</span>
          </Link>
          <span>I</span>
          <Link to="/settings">
            <span>설정</span>
          </Link>
        </div>
      </MenuBox>
      <RedLine></RedLine>
    </Container>
  );
};

export default MenuBar;
