import { IFetchingData } from "components/types/types";

export const fetchImages = (
  query: string,
  page: number
): Promise<IFetchingData> => {
  return fetch(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=27891054-2199c429fab30e58c22aa7ec7&image_type=photo&orientation=horizontal&per_page=12`
  ).then((response) => response.json());
};
