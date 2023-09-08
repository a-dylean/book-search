import { ReactNode } from "react";

export interface Props {
  children: ReactNode;
}

export interface FilterProps {
  category: string;
  sortingMethod: string;
  setCategory: (category: string) => void;
  setSortingMethod: (sortingMethod: string) => void;
}

export interface BookIdProp {
  bookId: string | undefined;
}

export interface BookItemState {
  book: BookItemInfo;
  isLoading: boolean;
  isSuccess: boolean;
  error?: string | undefined;
}

export interface BooksState {
  books: BookInfo[];
  searchOptions: SearchOptions;
  totalItems: number;
  isLoading: boolean;
  isSuccess: boolean;
  error: string | undefined;
}

export interface BookItemInfo {
  title: string;
  authors?: string[];
  publisher: string;
  publishedDate: string;
  description?: string;
  categories?: string[];
  imageLinks: { thumbnail: string };
  language: string;
}

export interface BookInfo {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    publisher: string;
    publishedDate: string;
    description?: string;
    pageCount: number;
    categories?: string[];
    imageLinks: { thumbnail: string };
    language: string;
  };
}

export interface SearchOptions {
  searchTerm?: string;
  pageNumber: number;
  sortingMethod?: string;
  categories?: string;
}

export interface ApiResponse {
  totalItems: number;
  items: BookInfo[];
  searchOptions: SearchOptions;
}
