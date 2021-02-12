import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Container = styled(Link)`
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

const TopListItem = ({
  match: { path },
  post: { category, title, date, id },
}) => {
  return (
    <Container to={path === "/" ? `/pdetail/${id}` : `/sdetail/${id}`}>
      <div className="title">
        <span>{category}</span>
        {category && <span className="partition">I</span>}
        {title}
      </div>
      <div className="date">{date}</div>
    </Container>
  );
};

export default withRouter(TopListItem);
