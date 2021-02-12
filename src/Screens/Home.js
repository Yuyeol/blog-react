import styled from "styled-components";
import { useContextState } from "context";
import Post from "Components/Post/Post";
import BlankBoard from "Components/Post/BlankBoard";
import Category from "Components/Home/Category/Category";
import Pagination from "Components/Pagination/Pagination";
import { useRef, useState } from "react";
import MenuBar from "Components/TopMenu/MenuBar";
import TopListBar from "Components/Home/TopList/TopListBar";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Main = styled.div`
  padding: 0px 15px;
  background-color: white;
  display: flex;
  position: relative;
  background-color: white;
  width: 1000px;
  height: 100%;
`;

const PostBox = styled.div`
  width: 100%;
  height: 100%;
`;

const Home = ({
  match: {
    url,
    params: { id },
  },
}) => {
  const { posts } = useContextState();
  // 페이지 계산공식
  const [currentPage, setCurrentPagen] = useState(1);
  const postsPerPage = useRef(3);
  const indexOfLastPost = currentPage * postsPerPage.current;
  const indexOfFirstPost = indexOfLastPost - postsPerPage.current;
  const currentPosts = posts.reverse().slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNum) => {
    setCurrentPagen(pageNum);
  };
  // 카테고리별 포스트 필터링
  const filterPosts = posts.filter((p) => id === p.category);
  // 탑리스트에서 클릭된 단일포스트 찾기
  const findPosts = posts.find((p) => id === p.id);

  return (
    <Container>
      <MenuBar />
      <Main>
        <Category />
        <PostBox>
          {!url.includes("pdetail") && <TopListBar />}
          {
            posts.length === 0 ? (
              <BlankBoard />
            ) : url === "/" ? (
              currentPosts.map((p) => <Post key={p.id} post={p} />)
            ) : url.includes("post") ? (
              // 카테고리별 페이지
              filterPosts.map((p) => <Post key={p.id} post={p} />)
            ) : url.includes("pdetail") ? (
              <Post post={findPosts} />
            ) : null
            // 나중에 notfound 디자인해서 넣을거임 지금은 귀찮아서....
          }
          {url === "/" && posts.length > 0 && (
            <Pagination
              postsPerPage={postsPerPage.current}
              postsNum={posts.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          )}
        </PostBox>
      </Main>
    </Container>
  );
};
export default Home;
