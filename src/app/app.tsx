import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { BookItemPage } from "../components/bookItemPage";
import { BooksListPage } from "../components/booksListPage";
import { routes } from "./routes";

const router = createBrowserRouter([
  {
    path: routes.ALL_BOOKS,
    element: <BooksListPage />,
  },
  {
    path: "/",
    element: <BooksListPage />,
  },
  {
    path: `${routes.BOOK_ITEM}/:bookId`,
    element: <BookItemPage />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
