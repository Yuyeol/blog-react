import styled from "styled-components";

import { useState } from "react";
import { useDispatch } from "context";
import WriteHeader from "Components/Write/WriteHeader";
import WriteForm from "Components/Write/WriteForm";
import { CREATE } from "actions";

const Container = styled.div`
  margin: 100px;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [inputs, setInputs] = useState("");
  const imgURL =
    "https://media.vlpt.us/images/juy23/profile/ed48f224-7e9f-4eb8-9dbc-e5d857fd3b66/social.png?w=120";
  const date = "2021년 1월 5일";
  const like = "3";
  const comments = "1";
  const dispatch = useDispatch();
  const handleInputs = (e) => {
    const { value, name } = e.target;
    setInputs({ ...inputs, [name]: value });
  };
  const handleSubmit = (e) => {
    dispatch({
      type: CREATE,
      payload: { inputs, imgURL, date, like, comments },
    });
  };
  return (
    <Container>
      <WriteHeader handleSubmit={handleSubmit} />
      <WriteForm handleInputs={handleInputs} />
    </Container>
  );
};
