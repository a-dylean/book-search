// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// export const getBooks = createAsyncThunk(
//     "books/getBooks",
//     async () => {
//         const res = fetch("url")
//         .then((res) => res.json)
//         .then((data) => data);
//         return res;
//     }
// )

// export const booksSlice = createSlice({
//     name: "books",
//     initialState: {
//         books: {},
//         loading: false,
//     },
//     reducers: {
//     //    selectBook: (state, action) => {
//     //     state.selectedBook = action.payload;
//     //} 
//     },
//     extraReducers: {
//         [getBooks.pending]: (state) => {
//           state.loading = true;
//         },
//         [getBooks.fulfilled]: (state, action) => {
//           state.loading = false;
//           const { data: { after, children } } = action.payload;
//           state.after = after;
//           state.books = children.reduce(
//             (accumulator, book) => ({...accumulator, [book.data.id]: book}),
//             state.books,
//           )
//         },
//         [getBooks.rejected]: (state) => {
//           state.loading = false;
//         },
//     }
// })
export {}