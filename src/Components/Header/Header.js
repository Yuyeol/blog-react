import styled from "styled-components";
import React from "react";

import HomeHeader from "./HomeHeader";
// import WriteHeader from "./WriteHeader";

const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100%;

  padding: 15px 30px;
  box-shadow: 2px 5px 5px rgba(16, 24, 32, 0.15);
  background-color: rgba(255, 255, 255, 0.8);
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <Container>
      {/* 
      !!!!!!!!!!! 까먹을까봐 기록해둠.
      헤더 전환은 버튼 이벤트가 아닌, 링크 변화로 잡을거임.
      버튼으로 하면 링크입력으로 접근할때 헤더가 바뀌지 않기 때문
       */}
      <HomeHeader />
      {/* <WriteHeader /> */}
    </Container>
  );
};
