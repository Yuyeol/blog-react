import React, { createContext, useContext, useReducer } from "react";
import reducer, { initialState } from "reducer";

const PostsContext = createContext();

const PostsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <PostsContext.Provider value={{ state, dispatch }}>
      {children}
    </PostsContext.Provider>
  );
};

export const useDispatch = () => {
  const { dispatch } = useContext(PostsContext);
  return dispatch;
};
export const useState = () => {
  const { state } = useContext(PostsContext);
  return state;
};

export default PostsProvider;
