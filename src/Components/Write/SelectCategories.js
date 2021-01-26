import { useContextState } from "context";
import React from "react";
import styled from "styled-components";
import { BLACK } from "styles";

const Container = styled.div`
  position: absolute;
  background-color: white;
  top: 150px;
  z-index: 1;
  font-size: 24px;
  font-weight: 600;
  color: grey;
  border: 1.5px solid #f4efea;
  padding: 5px 20px;
`;
const CategoriesItem = styled.div`
  margin-bottom: 3px;
  &:hover {
    color: ${BLACK};
    transition: color 0.5s ease;
  }
`;

const SelectCategories = ({ handleCategory }) => {
  const { categories } = useContextState();
  return (
    <Container>
      {categories.length === 0 ? (
        <div>생성된 카테고리가 없습니다.</div>
      ) : (
        categories.map((category) => (
          <CategoriesItem key={category} onClick={handleCategory}>
            {category}
          </CategoriesItem>
        ))
      )}
    </Container>
  );
};

export default SelectCategories;
