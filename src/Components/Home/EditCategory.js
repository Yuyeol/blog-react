import { useContextDispatch, useContextState } from "context";
import React, { useState } from "react";
import styled from "styled-components";
import { PINK } from "styles";
import { CATEGORY_C } from "reducer";

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

  form {
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
      .item-row {
        font-size: 18px;
        padding-bottom: 5px;
        margin-bottom: 5px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid ${PINK};
        .edit-block {
          display: flex;
          align-items: center;
          font-size: 14px;
          div {
            &:hover {
              font-weight: 600;
              transition: font-weight 0.2s ease-in-out;
            }
          }
          .edit {
            margin-right: 3px;
          }
        }
      }
    }
  }
`;

const EditCategory = () => {
  const { categories } = useContextState();
  const dispatch = useContextDispatch();
  const [input, setInput] = useState("");
  const handleInput = ({ target: { value } }) => {
    setInput(value);
  };
  const handleSubmit = () => {
    dispatch({
      type: CATEGORY_C,
      payload: input,
    });
    setInput("");
  };
  const handleEdit = (e) => {
    console.log(e);
  };
  const handleDelete = () => {};
  return (
    <Container>
      <form>
        <input placeholder="카테고리" value={input} onChange={handleInput} />
        <div className="submit" onClick={handleSubmit}>
          추가
        </div>
      </form>
      <div className="category-box">
        <div className="categories">
          {categories.map((category, index) => (
            <div key={index}>
              <div className="item-row">
                <div className="item">{category}</div>
                <div className="edit-block">
                  <div className="edit" onClick={handleEdit}>
                    수정
                  </div>
                  <div className="delete" onClick={handleDelete}>
                    삭제
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default EditCategory;
