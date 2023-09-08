import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { MAX_RESULTS, DEFAULT_PARAMS } from "../../appconfig";
import { BooksState, SearchOptions, ApiResponse } from "../../app/interfaces";
import axios from "axios";
import { searchOptionsEquals } from "../../helpers/helperFuncs";

export const getBooks = createAsyncThunk(
  "books/getBooks",
  async (searchOptions: SearchOptions) => {
    const { searchTerm, pageNumber, sortingMethod, categories } = searchOptions;
    try {
      const startIndex = (pageNumber - 1) * MAX_RESULTS;
      const res = await axios.get(
        "https://www.googleapis.com/books/v1/volumes",
        {
          params: {
            ...DEFAULT_PARAMS,
            q:
              searchTerm +
              (categories !== "all" ? `+subject:${categories}` : ""),
            startIndex: startIndex,
            orderBy: sortingMethod,
            maxResults: MAX_RESULTS,
          },
        }
      );
      if (res.data.totalItems === 0) {
        res.data.items = [];
      }
      res.data.searchOptions = searchOptions;
      return res.data;
    } catch (error) {
      console.error("rejected", error);
    }
  }
);

const initialState: BooksState = {
  books: [],
  searchOptions: {
    pageNumber: 0,
  },
  totalItems: 0,
  isLoading: false,
  isSuccess: false,
  error: "",
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBooks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getBooks.fulfilled,
      (state, action: PayloadAction<ApiResponse>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.totalItems = action.payload.totalItems;
        if (
          searchOptionsEquals(state.searchOptions, action.payload.searchOptions)
        ) {
          state.books = [...state.books, ...action.payload.items];
        } else {
          state.books = action.payload.items;
        }
        state.searchOptions = action.payload.searchOptions;
      }
    );
    builder.addCase(getBooks.rejected, (state, action) => {
      state.isLoading = false;
      state.books = [];
      state.error = action.error.message;
    });
  },
});

export default booksSlice.reducer;
