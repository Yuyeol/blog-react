import styled from "styled-components";
import { useContextState } from "context";
import Post from "Components/Post/Post";
import BlankBoard from "Components/Post/BlankBoard";
import MenuHeader from "Components/Home/MenuHeader";
import TopList from "Components/Home/TopList";
import Category from "Components/Home/Category/Category";

const Container = styled.div`
  margin: 0px 140px;
  padding: 0px 10px;
  background-color: white;
  display: flex;
  position: relative;
  background-color: white;
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
  const filterPosts = posts.filter((p) => id === p.category);

  return (
    <>
      <MenuHeader />
      <Container>
        <Category />
        <PostBox>
          <TopList />
          {
            posts.length === 0 ? (
              <BlankBoard />
            ) : url === "/" ? (
              posts.map((p) => <Post key={p.id} post={p} />)
            ) : url.includes("post") ? (
              filterPosts.map((p) => <Post key={p.id} post={p} />)
            ) : null
            // 나중에 notfound 디자인해서 넣을거임 지금은 귀찮아서....
          }
        </PostBox>
      </Container>
    </>
  );
};
export default Home;
