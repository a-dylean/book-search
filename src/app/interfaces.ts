import { ReactNode } from "react";

export interface Props {
    children: ReactNode;
  }

export interface FilterProps {
    filterName: string;
}

export interface BooksData {

}

export interface BooksState {
    books: BooksData,
    loading: boolean,
}