import { useContextDispatch } from "context";
import React from "react";
import { CATEGORY_D } from "reducer";
import styled from "styled-components";
import { PINK } from "styles";

const Container = styled.div`
  .item-row {
    padding-bottom: 5px;
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${PINK};
    .item-input {
      font-size: 17px;
      flex: 1;
      width: 100%;
      border: none;
      width: 150px;
      &:focus {
        outline: none;
      }
    }
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
      .delete {
        margin-left: 3px;
      }
    }
  }
`;

const EditCategoryItem = ({ category }) => {
  const dispatch = useContextDispatch();

  const handleDelete = (e) => {
    const category = e.target.parentNode.parentNode.firstChild.placeholder;
    dispatch({
      type: CATEGORY_D,
      payload: category,
    });
  };
  return (
    <Container>
      <div className="item-row">
        <input className="item-input" placeholder={category.item} readOnly />
        <div className="edit-block">
          <div className="delete" onClick={handleDelete}>
            삭제
          </div>
        </div>
      </div>
    </Container>
  );
};

export default EditCategoryItem;
