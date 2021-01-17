import { v4 as uuid } from "uuid";
import { CREATE } from "actions";
import moment from "moment";

export const initialState = {
  posts: [
    {
      id: 1,
      title: "1st",
      contents: "contents",
      like: 0,
      comments: 0,
    },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case CREATE:
      const { title, contents } = action.payload;
      const date = moment().format("lll");
      console.log(date);
      return {
        ...state,
        posts: [
          ...state.posts,
          { id: uuid(), title, contents, date, like: 0, comments: 0 },
        ],
      };
    default:
      return;
  }
};

export default reducer;
