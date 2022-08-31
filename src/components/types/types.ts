import React from "react";

export interface IFetchingData {
  total: number;
  totalHits: number;
  hits: {
    id: number;
    pageURL: string;
    type: string;
    tags: string;
    previewURL: string;
    previewWidth: number;
    previewHeight: number;
    webformatURL: string;
    webformatWidth: number;
    webformatHeight: number;
    largeImageURL: string;
    fullHDURL: string;
    imageURL: string;
    imageWidth: number;
    imageHeight: number;
    imageSize: number;
    views: number;
    downloads: number;
    likes: number;
    comments: number;
    user_id: number;
    user: string;
    userImageURL: string;
  }[];
}

export interface IProperDataItem {
  id: number;
  webformatURL: string;
  largeImageURL: string;
  tags: string;
}

export type IProperData = IProperDataItem[];

export interface IAppState {
  query: [] | string[];
  imagesData: [] | IProperData;
  page: number;
  totalHits: number;
  largeImageData: { largeImageURL: string | undefined; tags: string };
  showModal: boolean;
  showSpinner: boolean;
}

export interface ILoadButton {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export interface IImagesList {
  images: IProperData;
  onOpenModal: (event: { target: HTMLImageElement }) => void;
}

export interface ISearch {
  query: string;
}

export interface ISearchProps {
  onSubmit: (query: string) => void;
}

export interface IModalProps {
  onClose: () => void;
  children: React.ReactNode;
}
