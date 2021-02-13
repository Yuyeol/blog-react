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
export const COMMENT_C = "comment_create";
export const COMMENT_D = "comment_delete";

export const initialState = {
  profile: {
    profileImg,
    blogName: "URE's Blog",
    nickName: "URE",
    introduce: "URE의 블로그입니다.",
  },
  categories: [
    // { id: uuid(), item: "온라인게임" },
    // { id: uuid(), item: "해외주식" },
    // { id: uuid(), item: "버킷리스트" },
  ],
  posts: [
    // {
    //   id: uuid(),
    //   title: "첫번째",
    //   contents: "contents",
    //   date: moment().format("lll"),
    //   like: 0,
    //   comments: [
    //     {
    //       id: uuid(),
    //       writer: "URE",
    //       comment: "안녕",
    //       date: moment().format("lll"),
    //     },
    //     {
    //       id: uuid(),
    //       writer: "URE",
    //       comment: "아니",
    //       date: moment().format("lll"),
    //     },
    //   ],
    //   category: "온라인게임",
    // },
  ],
  saved: [
    // {
    //   id: uuid(),
    //   title: "첫번째",
    //   contents: "contents",
    //   date: moment().format("lll"),
    //   category: "온라인게임",
    // },
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
            comments: [],
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
            comments: [],
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
    case COMMENT_C:
      const notUpdatedPo = state.posts.filter(
        (post) => post.id !== action.payload.id
      );
      const updatedPo = state.posts.find(
        (post) => post.id === action.payload.id
      );
      console.log(updatedPo);
      return {
        ...state,
        posts: [
          ...notUpdatedPo,
          {
            ...updatedPo,
            comments: [
              ...updatedPo.comments,
              {
                id: uuid(),
                writer: "URE",
                comment: action.payload.inputCo,
                date: moment().format("lll"),
              },
            ],
          },
        ],
      };
    case COMMENT_D:
      const notUpdatedPost = state.posts.filter(
        (post) => post.id !== action.payload.pId
      );
      const updatedPost = state.posts.find(
        (post) => post.id === action.payload.pId
      );
      console.log(updatedPost);
      return {
        ...state,
        posts: [
          ...notUpdatedPost,
          {
            ...updatedPost,
            comments: updatedPost.comments.filter(
              (c) => c.id !== action.payload.cId
            ),
          },
        ],
      };
    default:
      return;
  }
};

export default reducer;
