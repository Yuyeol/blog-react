import PostsProvider from "context";
import GlobalStyles from "./GlobalStyles";
import Router from "./Router";

function App() {
  return (
    <PostsProvider>
      <Router />
      <GlobalStyles />
    </PostsProvider>
  );
}

export default App;
