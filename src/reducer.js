import { v4 as uuid } from "uuid";
import moment from "moment";
import profileImg from "Assets/profile.jpg";

export const CREATE = "create";
export const SAVE = "save";
export const UPDATE = "update";
export const DELETE = "delete";
export const COMPLETE = "complete";
export const CATEGORY_C = "category_create";
export const CATEGORY_U = "category_update";
export const CATEGORY_D = "category_delete";
export const PROFILE_U = "profile_update";

export const initialState = {
  profile: {
    profileImg,
    blogName: "URE's Blog",
    nickName: "URE",
    introduce: "URE의 블로그입니다.",
  },
  categories: [
    { id: uuid(), item: "Sample 1" },
    { id: uuid(), item: "Sample 2" },
    { id: uuid(), item: "Sample 3" },
  ],
  posts: [
    {
      id: uuid(),
      title: "첫번째",
      contents: "contents",
      like: 0,
      comments: 0,
      category: "Sample 1",
    },
  ],
  saved: [
    {
      id: uuid(),
      title: "첫번째",
      contents: "contents",
      date: moment().format("lll"),
      category: "Sample 1",
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
    // 포스트
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
      const notUpdatedP = state.posts.filter(
        (post) => post.id !== action.payload.id
      );
      const updatedP = state.posts.find(
        (post) => post.id === action.payload.id
      );
      return {
        ...state,
        posts: [
          ...notUpdatedP,
          {
            ...updatedP,
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

    // 카테고리
    case CATEGORY_C:
      return {
        ...state,
        categories: [
          ...state.categories,
          {
            id: uuid(),
            item: action.payload,
          },
        ],
      };
    case CATEGORY_D:
      return {
        ...state,
        categories: state.categories.filter((c) => c.item !== action.payload),
      };
    // 프로필
    case PROFILE_U:
      return {
        ...state,
        profile: {
          profileImg: action.payload.image,
          blogName: action.payload.blogName,
          nickName: action.payload.nickName,
          introduce: action.payload.introduce,
        },
      };
    default:
      return;
  }
};

export default reducer;
