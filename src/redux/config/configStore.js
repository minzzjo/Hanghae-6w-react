import { configureStore } from "@reduxjs/toolkit";

import content from "../modules/ContentSlice";
import comment from "../modules/CommentSlice";

const store = configureStore({
  reducer: {
    content: content,
    comment: comment,
  },
  //dev tool을 개발 환경에서만 설정
  // devTools: process.env.REACT_APP_MOD !== "production",
});

export default store;