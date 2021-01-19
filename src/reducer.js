import { v4 as uuid } from "uuid";
import { CREATE, UPDATE } from "actions";
import moment from "moment";

export const initialState = {
  posts: [
    // {
    //   id: 1,
    //   title: "1st",
    //   contents: "contents",
    //   like: 0,
    //   comments: 0,
    // },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: uuid(),
            title: action.payload.title,
            contents: action.payload.contents,
            date: moment().format("lll"),
            like: 0,
            comments: 0,
          },
        ],
      };
    case UPDATE:
      const notUpdated = state.posts.filter(
        (post) => post.id !== action.payload.id
      );
      const updated = state.posts.find((post) => post.id === action.payload.id);
      return {
        ...state,
        posts: [
          ...notUpdated,
          {
            ...updated,
            title: action.payload.title,
            contents: action.payload.contents,
          },
        ],
      };
    default:
      return;
  }
};

export default reducer;
