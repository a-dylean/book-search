import { ReactNode } from "react";

export interface Props {
    children: ReactNode;
  }

export interface FilterProps {
    filterName: string;
    //sorting
}

export interface BooksState {
    books: BookInfo[],
    totalItems: number,
    loading: boolean,
    error: string | undefined
}

export interface BookInfo {
    id: string,
    volumeInfo : {
        title: string
        subtitle: string
        authors?: string[]
        publisher: string
        publishedDate: string
        description?: string
        pageCount: number
        categories?: string[]
        imageLinks?: {smallThumbnail?: string, thumbnail?: string}
        language: string
        previewLink: string
    }
}

export interface SearchingOptions {
    searchTerm?: string
    pageNumber: number
    pageSize: number
    sortingMethod: string
    categories?: string
}

export interface apiResponse {
    totalItems: number,
    items: any
}