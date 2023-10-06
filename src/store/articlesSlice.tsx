import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Article } from "../models/model.ts";

type State = {
  articles: Article[];
  article: Article | null;
  keywords: string;
  status: string;
};

const initialState: State = {
  articles: [],
  article: null,
  keywords: "",
  status: "idle",
};

const articlesSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    setKeyword(state, action) {
      state.keywords = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getArticles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getArticles.fulfilled, (state, action) => {
        state.articles = action.payload;
        state.status = "idle";
      })
      .addCase(getArticles.rejected, (state) => {
        state.status = "error";
      })
      .addCase(getArticle.fulfilled, (state, action) => {
        state.article = action.payload;
      });
  },
});

export const { setKeyword } = articlesSlice.actions;
export const getArticles = createAsyncThunk("articles/get", async () => {
  let result = [];
  try {
    const data = await fetch("http://localhost:3001/articles");
    if (data) {
      result = await data.json();
    }
    return result;
  } catch (e) {
    console.error("Error");
  }
  return result;
});
export const getArticle = createAsyncThunk(
  "article/get",
  async (id: string) => {
    const article = await fetch(`http://localhost:3001/article/${id}`);
    return await article.json();
  }
);

export default articlesSlice.reducer;
