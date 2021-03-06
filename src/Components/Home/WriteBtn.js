import { Link } from "react-router-dom";
import styled from "styled-components";
import { RiQuillPenLine } from "react-icons/ri";
import { PINK, RED } from "styles";

const Write = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${PINK};
  background: ${RED};
  box-shadow: 4px 4px 4px rgba(84, 84, 86, 0.15);
  padding: 10px 0px;
  border-radius: 10px;
  font-weight: 600;
`;
const SLink = styled(Link)``;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <SLink to="/write">
    <Write>
      <RiQuillPenLine />새 글 쓰기
    </Write>
  </SLink>
);
