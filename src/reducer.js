import { v4 as uuid } from "uuid";
import moment from "moment";

export const CREATE = "create";
export const SAVE = "save";
export const UPDATE = "update";
export const DELETE = "delete";
export const COMPLETE = "complete";
export const CATEGORY_C = "category_c";

export const initialState = {
  categories: ["Sample 1", "Sample 2", "Sample 3"],
  posts: [
    {
      id: 1,
      title: "첫번째",
      contents: "contents",
      like: 0,
      comments: 0,
      category: "카테고리",
    },
  ],
  saved: [
    {
      id: uuid(),
      title: "첫번째",
      contents: "contents",
      date: moment().format("lll"),
      category: "",
    },
    // {
    //   id: uuid(),
    //   title: "1st",
    //   contents: "contents",
    //   like: 0,
    //   comments: 0,
    //   date: moment().format("lll"),
    // },
    // {
    //   id: uuid(),
    //   title: "1st",
    //   contents: "contents",
    //   date: moment().format("lll"),
    // },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    // 포스트 CRUD
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
            category: action.payload.category,
          },
        ],
      };
    case SAVE:
      const save = state.saved.filter((s) => s.id !== action.payload.id);
      return {
        ...state,
        saved: [
          ...save,
          {
            id: uuid(),
            title: action.payload.title,
            contents: action.payload.contents,
            date: moment().format("lll"),
            category: action.payload.category,
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
            category: action.payload.category,
          },
        ],
      };
    case DELETE:
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.payload.id),
        saved: state.saved.filter((s) => s.id !== action.payload.id),
      };
    case COMPLETE:
      return {
        ...state,
        saved: state.saved.filter((s) => s.id !== action.payload.id),
        posts: [
          ...state.posts,
          {
            id: uuid(),
            title: action.payload.title,
            contents: action.payload.contents,
            date: moment().format("lll"),
            like: 0,
            comments: 0,
            category: action.payload.category,
          },
        ],
      };

    // 카테고리 CRUD
    case CATEGORY_C:
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };
    default:
      return;
  }
};

export default reducer;
