import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
} from "@reduxjs/toolkit";
import { MY_API_KEY, MAX_RESULTS } from "../../appconfig";
import {
  BooksState,
  SearchingOptions,
  apiResponse,
} from "../../app/interfaces";
import axios from "axios";

const DEFAULT_PARAMS = {
  key: MY_API_KEY,
  maxResults: MAX_RESULTS
};

export const getBooks = createAsyncThunk(
  "books/getBooks",
  async ({
    searchTerm,
    pageNumber,
    sortingMethod,
    categories,
  }: SearchingOptions) => {
    try {
      const startIndex = (pageNumber - 1) * MAX_RESULTS;
      const res = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}${
          categories !== "all" ? `+subject:${categories}` : ""
        }`,
        {
          params: {
            ...DEFAULT_PARAMS,
            startIndex: startIndex,
            orderBy: sortingMethod
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
  visibleBooks: [],
  selectedBook: null,
  totalItems: null,
  isLoading: false,
  isSuccess: false,
  error: "",
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBooks: (state, action) => {
      //state.visibleBooks = action.payload;
      state.visibleBooks.push(...action.payload);
    },
    emptyBooks: (state) => {
      state.books = []
    },
    selectBook: (state, { payload }) => {
      state.selectedBook = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getBooks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getBooks.fulfilled,
      (state, action: PayloadAction<apiResponse>) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.totalItems = action.payload.totalItems;
        state.books = action.payload.items;
        // state.books = action.payload.items?.reduce((acc: any[], current: { id: any; }) => {
        //   let exists = acc.find(item => {
        //     return item.id === current.id;
        //   })
        //   if (!exists) {
        //     acc = acc.concat(current);
        //   }
        //   return acc;
        // }, [])
       }
    );
    builder.addCase(getBooks.rejected, (state, action) => {
      state.isLoading = false;
      state.books = [];
      state.error = action.error.message;
    });
  },
});

export const {addBooks, emptyBooks, selectBook} = booksSlice.actions;
export default booksSlice.reducer;
