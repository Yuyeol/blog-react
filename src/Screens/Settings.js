import EditProfileImg from "Components/Settings/EditProfileImg";
import { useContextDispatch, useContextState } from "context";
import { useState } from "react";
import styled from "styled-components";
import { PINK, RED } from "styles";
import emptyImg from "Assets/empty.png";
import { PROFILE_U } from "reducer";

const Container = styled.div`
  display: flex;
  justify-content: center;

  .edit-profile {
    background-color: white;
    width: 500px;
    padding: 0 15px;
    .header {
      background-color: white;
      height: 120px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;

      .name-box {
        font-weight: 600;
        font-size: 20px;
        .menu-column {
          display: flex;
          padding: 5px 0;

          span {
            &:nth-child(2) {
              margin: 0 4px;
              color: ${PINK};
            }
          }
        }
      }

      .red-line {
        height: 3px;
        width: 100%;
        box-sizing: border-box;
        background-color: ${RED};
        bottom: 0;
        left: 0;
      }
    }

    .edit {
      margin-left: 30px;
      .title {
        margin-top: 25px;
        margin-bottom: 10px;
        font-size: 20px;
        font-weight: 600;
      }
      input {
        width: 100%;
        font-size: 20px;
        padding: 5px;
        border: 1px solid lightgrey;
        &:focus {
          outline-color: ${RED};
        }
      }
      textarea {
        width: 100%;
        height: 80px;
        font-size: 20px;
        padding: 5px;
        border: 1px solid lightgrey;
        resize: none;
        &:focus {
          outline-color: ${RED};
        }
      }
    }
    .submit-box {
      display: flex;
      justify-content: center;
      background-color: white;
      padding: 20px;
      div {
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 40px;
        cursor: pointer;
        font-weight: 600;
        border-radius: 100px;
      }
      .submit {
        margin-right: 30px;
        background: linear-gradient(to top, ${RED}, #d2434d);
        color: ${PINK};
      }
      .cancel {
        background: linear-gradient(to top, #e2dedb, ${PINK});
      }
    }
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
const Settings = ({ history }) => {
  const { profile } = useContextState();
  const dispatch = useContextDispatch();
  const [image, setImage] = useState(profile && profile.profileImg);
  const [blogName, setBlogName] = useState(profile && profile.blogName);
  const [nickName, setNickName] = useState(profile && profile.nickName);
  const [introduce, setIntroduce] = useState(profile && profile.introduce);

  const handleDelete = () => {
    setImage(emptyImg);
  };

  const handleImgChange = (event) => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleBlogName = ({ target: { value } }) => {
    setBlogName(value);
  };
  const handleNickName = ({ target: { value } }) => {
    setNickName(value);
  };
  const handleIntroduce = ({ target: { value } }) => {
    setIntroduce(value);
  };

  const handleEdit = () => {
    dispatch({
      type: PROFILE_U,
      payload: { image, blogName, nickName, introduce },
    });
    history.goBack();
  };
  const handleCancel = () => {
    history.goBack();
  };
  return (
    <Container>
      <div className="edit-profile">
        <div className="header">
          <div className="name-box">
            <div className="menu-column">내 프로필</div>
          </div>
          <div className="red-line"></div>
        </div>
        <div className="edit">
          <div className="title">사진</div>
          <EditProfileImg
            handleDelete={handleDelete}
            handleImgChange={handleImgChange}
            image={image}
          />
          <div className="title">블로그명</div>
          <input onChange={handleBlogName} value={blogName} maxLength="20" />
          <div className="title">별명</div>
          <input onChange={handleNickName} value={nickName} maxLength="6" />
          <div className="title">소개글</div>
          <textarea
            defaultValue={introduce}
            onChange={handleIntroduce}
            maxLength="150"
          ></textarea>
        </div>
        <div className="submit-box">
          <div className="submit" onClick={handleEdit}>
            수정
          </div>
          <div className="cancel" onClick={handleCancel}>
            취소
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Settings;
