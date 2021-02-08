import React from "react";
import styled from "styled-components";
import { BLACK, PINK, RED } from "styles";

const Container = styled.div`
  .img-row {
    display: flex;
    .img-box {
      width: 180px;
      height: 180px;
      overflow: hidden;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${BLACK};
      .profile-img {
        height: 180px;
      }
    }
    .btn-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      margin-left: 10px;
      div {
        cursor: pointer;
        font-size: 18px;
        width: 50px;
        height: 50px;
        background: ${PINK};
        color: ${BLACK};
        margin: 5px 0;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover {
          background-color: ${RED};
          color: ${PINK};
          transition: all 0.3s ease;
        }
      }
      .btn-edit {
        position: relative;
      }
      input {
        opacity: 0;
        position: absolute;
        height: 70px;
        border-radius: 50%;
        cursor: pointer;
      }
    }
  }
`;

const EditProfileImg = ({ image, handleDelete, handleImgChange }) => {
  return (
    <Container>
      <div className="img-row">
        <div className="img-box">
          <img className="profile-img" src={image} alt="PROFILE" />
        </div>
        <div className="btn-box">
          <div className="btn-edit">
            수정
            <input
              type="file"
              accept="image/jpeg, image/jpg"
              onChange={handleImgChange}
            />
          </div>
          <span>
            <div className="btn-delete" onClick={handleDelete}>
              삭제
            </div>
          </span>
        </div>
      </div>
    </Container>
  );
};

export default EditProfileImg;
