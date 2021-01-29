import { useContextDispatch, useContextState } from "context";
import React, { useState } from "react";
import styled from "styled-components";
import { PINK } from "styles";
import { CATEGORY_C } from "reducer";
import EditCategoryItem from "./EditCategoryItem";

const Container = styled.div`
  background-color: white;
  border: 1.5px solid ${PINK};
  position: absolute;
  width: 250px;
  height: 250px;
  padding: 10px;
  top: 420px;
  left: 140px;
  z-index: 1;

  .form-box {
    display: flex;
    input {
      font-size: 18px;
      font-weight: 600;
      width: 100%;
      flex: 1;
      margin-right: 10px;
      padding: 3px 10px;
      border: none;
    }
    input:focus {
      outline: none;
    }
    .submit {
      font-size: 18px;
      font-weight: 600;
      padding: 3px 10px;
      display: flex;
      align-items: center;
      border: none;
      border-radius: 10px;
      background: linear-gradient(to top, #e2dedb, ${PINK});
    }
  }
  .category-box {
    margin-top: 7px;
    padding: 5px;
    .categories {
    }
  }
`;

const EditCategory = () => {
  const { categories } = useContextState();
  const dispatch = useContextDispatch();
  const [input, setInput] = useState("");
  const handleAddInput = ({ target: { value } }) => {
    setInput(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: CATEGORY_C,
      payload: input,
    });
    setInput("");
  };

  return (
    <Container>
      <div className="form-box">
        <input
          placeholder="카테고리"
          value={input}
          onChange={handleAddInput}
          autoFocus
        />
        <div className="submit" onClick={handleSubmit}>
          추가
        </div>
      </div>
      <div className="category-box">
        <div className="categories">
          {categories.map((category, index) => (
            <EditCategoryItem key={index} category={category} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default EditCategory;
