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
  visibleBooks: BookInfo[];
  totalItems: number | null;
  isLoading: boolean;
  isSuccess: boolean;
  error: string | undefined;
}

export interface BookItemInfo {
  //id: string
  title: string;
  subtitle: string;
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
    subtitle: string;
    authors?: string[];
    publisher: string;
    publishedDate: string;
    description?: string;
    pageCount: number;
    categories?: string[];
    imageLinks: { thumbnail: string };
    language: string;
    previewLink: string;
  };
}

export interface SearchingOptions {
  searchTerm?: string;
  pageNumber: number;
  sortingMethod?: string;
  categories?: string;
}

export interface apiResponse {
  totalItems: number;
  items: any;
}
