import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 5px;
  &:hover {
    font-weight: 600;
  }
  .title {
    .partition {
      margin: 0 4px;
      color: lightgrey;
    }
  }
`;

const TopListItem = ({ post: { category, title, date } }) => {
  return (
    <Container>
      <div className="title">
        <span>{category}</span>
        {category && <span className="partition">I</span>}
        {title}
      </div>
      <div className="date">{date}</div>
    </Container>
  );
};

export default TopListItem;
