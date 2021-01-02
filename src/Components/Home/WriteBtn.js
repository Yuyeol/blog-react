import { Link } from "react-router-dom";
import styled from "styled-components";
import { RiQuillPenLine } from "react-icons/ri";

const Write = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  background-color: #1a7a4c;
  padding: 10px 0px;
  border-radius: 1000px;
  font-weight: 600;
`;
const SLink = styled(Link)``;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <SLink to="/Write">
    <Write>
      <RiQuillPenLine />새 글 쓰기
    </Write>
  </SLink>
);
