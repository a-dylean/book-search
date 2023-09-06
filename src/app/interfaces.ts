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

export interface BooksState {
  books: BookInfo[];
  visibleBooks: BookInfo[];
  selectedBook: BookInfo2 | null ;
  totalItems: number | null;
  isLoading: boolean;
  isSuccess: boolean;
  error: string | undefined;
}

export interface BookInfo2 {
    title: string;
    subtitle: string;
    authors?: string[];
    publisher: string;
    publishedDate: string;
    description?: string;
    categories?: string[];
    imageLinks?: { smallThumbnail?: string; thumbnail?: string };
    language: string;
}

// export interface industryIdentifier {
//     type: string,
//     identifier: string
// }
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
    imageLinks?: { smallThumbnail?: string; thumbnail?: string };
    language: string;
    previewLink: string;
    //industryIdentifiers: industryIdentifier
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
