import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { BookItemPage } from "../components/bookItemPage";
import { BooksListPage } from "../components/booksListPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BooksListPage />,
  },
  {
    path: "books?",
    element: <BooksListPage />,
  },
  {
    path: "books?/:bookId",
    element: <BookItemPage />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
