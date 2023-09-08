import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { DEFAULT_PARAMS } from "../../appconfig";
import { BookInfo, BookItemState } from "../../app/interfaces";
import axios from "axios";

export const getBookbyId = createAsyncThunk(
  "books/getBook",
  async (bookId: string | undefined) => {
    try {
      const res = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${bookId}`,
        {
          params: {
            ...DEFAULT_PARAMS,
          },
        }
      );
      return res.data;
    } catch (error) {
      console.error("rejected", error);
    }
  }
);

const initialState: BookItemState = {
  book: {
    title: "",
    publisher: "",
    publishedDate: "",
    imageLinks: {
      thumbnail: "",
    },
    language: "",
  },
  isLoading: false,
  isSuccess: false,
  error: "",
};

export const bookItemSlice = createSlice({
  name: "bookItem",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBookbyId.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getBookbyId.fulfilled,
      (state, action: PayloadAction<BookInfo>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.book = action.payload.volumeInfo;
      }
    );
    builder.addCase(getBookbyId.rejected, (state, action) => {
      state.isLoading = false;
      state.book = {
        title: "",
        publisher: "",
        publishedDate: "",
        imageLinks: {
          thumbnail: "",
        },
        language: "",
      };
      state.error = action.error.message;
    });
  },
});

export default bookItemSlice.reducer;
