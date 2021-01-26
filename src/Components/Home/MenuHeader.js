import { useContextState } from "context";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BLACK, PINK, RED } from "styles";

const Container = styled.div`
  background-color: white;
  height: 120px;
  margin: 0px 140px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 8px 10px;
`;

const MenuBox = styled.div`
  font-weight: 600;
  color: grey;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  & div:hover {
    color: ${BLACK};
    transition: color 0.5s ease;
  }
`;

const MenuColumn = styled.div`
  display: flex;
  padding: 5px 0;
  span {
    &:nth-child(2) {
      margin: 0 4px;
      color: ${PINK};
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

const MenuLink = styled(Link)``;

const MenuHeader = () => {
  const { saved } = useContextState();
  return (
    <Container>
      <MenuBox>
        <MenuColumn>전체메뉴</MenuColumn>
        <MenuColumn>
          <MenuLink to="/saved">
            <span>임시저장함 ({saved.length})</span>
          </MenuLink>
          <span>I</span>
          <MenuLink to="/settings">
            <span>설정</span>
          </MenuLink>
        </MenuColumn>
      </MenuBox>
      <RedLine></RedLine>
    </Container>
  );
};

export default MenuHeader;
