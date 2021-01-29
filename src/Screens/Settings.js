import EditProfileImg from "Components/Settings/EditProfileImg";
import styled from "styled-components";

const Container = styled.div`
  margin: 0px 140px;
  padding: 0px 10px;
  height: 100vh;
  background-color: white;
  display: flex;
  position: relative;
  background-color: white;
  .edit-profile {
    margin-top: 100px;
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <Container>
    <div className="edit-profile">
      <EditProfileImg />
    </div>
  </Container>
);
