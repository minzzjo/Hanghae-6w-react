import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { create } from "json-server";
// import thunk from "redux-thunk";

// initialState
const initialState = {
  comment: [
    {
      id: 1,
      comment: "내 이름은 코난, 탐정이죠.",
    }
  ]
};

// Thunk function

//GET - GETCOMMENT
export const __getComment = createAsyncThunk(
  "comment/__getComment",
  async (thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/comment");
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

// POST - ADDCOMMENT
export const __addComment = createAsyncThunk(
  "comment/__addComment",
  async (payload, thunkAPI) => {
    try {
      await axios.post("http://localhost:3001/comment", payload)
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

// DELETE - DELETECOMMENT
export const __deleteComment = createAsyncThunk(
  "comment/__deleteComment",
  async (payload, thunkAPI) => {
    try {
      await axios.delete(`http://localhost:3001/comment/${payload}`);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
)

// PATCH(PUT) - EDITCONMMENT
export const __editComment = createAsyncThunk(
  "content/__editComment",
  async (payload, thunkAPI) => {
    try {
      // 내용을 수정하고
      await axios.patch(`http://localhost:3001/${payload}`, { id: payload.id, comment: payload.target });
      // 수정한 값을 넣은 새로운 내용을 get으로 가져온다
      const data = await axios.get("http://localhost:3001/content");
      // 성공하면 가져온 수정 데이터를 보내주고
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      // 실패하면 서버에서 에러메시지를 보내준다.
      return thunkAPI.rejectWithValue(error);
    }
  }
)

// ExtraReducer
const CommentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: {
    [__getComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__getComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.comment = action.payload;
    },
    [__getComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__addComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__addComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__addComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__deleteComment.pending]: (state) => {
      state.isLoading = true;
    },
    [__deleteComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.content = action.payload;
    },
    [__deleteComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.content = action.payload;
    },
    [__editComment.pending]: (state) => {
      state.isLoading = false;
    },
    [__editComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.content = action.payload;
    },
    [__editComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }
  }
})

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { getComment, addComment, deleteComment, editComment } = CommentSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default CommentSlice.reducer;