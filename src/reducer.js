import { v4 as uuid } from "uuid";
import { CREATE } from "actions";

export const initialState = {
  posts: [
    {
      id: uuid(),
      title: "블로그 첫 게시글",
      contents: "로고만들기. 포토샵",
      imgURL:
        "https://postfiles.pstatic.net/MjAyMTAxMDRfMTYx/MDAxNjA5NzQ3NTY4OTYy.HGoHVtVfo3EF5VJJaxTO2w40BkHhmq2msClcmLnEtAsg.EOMyy5P1sU4Mul7jx-Z2Q-0uZs74Sjq3e7oxi0OM5Qgg.PNG.uy23/%EC%A0%9C%EB%AA%A9-%EC%97%86%EC%9D%8C-1.png?type=w773",
      date: "2021년 1월 5일",
      like: "3",
      comments: "1",
    },
    {
      id: uuid(),
      title: "블로그 두번째 게시글",
      contents: "듀번째이다.",
      imgURL:
        "https://postfiles.pstatic.net/MjAyMTAxMDRfMTYx/MDAxNjA5NzQ3NTY4OTYy.HGoHVtVfo3EF5VJJaxTO2w40BkHhmq2msClcmLnEtAsg.EOMyy5P1sU4Mul7jx-Z2Q-0uZs74Sjq3e7oxi0OM5Qgg.PNG.uy23/%EC%A0%9C%EB%AA%A9-%EC%97%86%EC%9D%8C-1.png?type=w773",
      date: "2021년 1월 6일",
      like: "2",
      comments: "2",
    },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case CREATE:
      const {
        inputs: { title, contents },
        date,
        like,
        comments,
        imgURL,
      } = action.payload;
      return {
        ...state,
        posts: [
          ...state.posts,
          { id: uuid(), title, contents, imgURL, date, like, comments },
        ],
      };
    default:
      return;
  }
};

export default reducer;
