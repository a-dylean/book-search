import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
} from "@reduxjs/toolkit";
import { MY_API_KEY } from "../../appconfig";
import {
  BooksState,
  SearchingOptions,
  apiResponse,
} from "../../app/interfaces";
import axios from "axios";

const DEFAULT_PARAMS = {
  key: MY_API_KEY,
};

export const getBooks = createAsyncThunk(
  "books/getBooks",
  async ({
    searchTerm = "JS",
    pageNumber,
    pageSize,
    sortingMethod,
    categories = "all",
  }: SearchingOptions) => {
    try {
      const startIndex = (pageNumber - 1) * pageSize;
      const res = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}${
          categories !== "all" ? `+subject:${categories}` : ""
        }`,
        {
          params: {
            ...DEFAULT_PARAMS,
            startIndex: startIndex,
            orderBy: sortingMethod,
            maxResults: pageSize,
          },
        }
      );
      return res.data;
    } catch (error) {
      console.error("rejected", error);
    }
  }
);

const initialState: BooksState = {
  books: [],
  totalItems: 0,
  loading: false,
  error: "",
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBooks.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getBooks.fulfilled,
      (state, action: PayloadAction<apiResponse>) => {
        state.loading = false;
        state.totalItems = action.payload.totalItems;
        state.books = action.payload.items;
        }
    );
    builder.addCase(getBooks.rejected, (state, action) => {
      state.loading = false;
      state.books = [];
      state.error = action.error.message;
    });
  },
});

export default booksSlice.reducer;
