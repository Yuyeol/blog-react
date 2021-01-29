import React from "react";
import styled from "styled-components";
import profileImg from "Assets/profile.jpg";

const Container = styled.div`
  .img-box {
  }
  .profile-img {
    width: 200px;
  }
`;

const EditProfileImg = () => {
  return (
    <Container>
      <div classNmae="img-box">
        <img className="profile-img" src={profileImg} alt="PROFILE" />
      </div>
    </Container>
  );
};

export default EditProfileImg;
