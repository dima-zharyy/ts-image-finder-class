import {
  IFetchingData,
  IProperData,
  IProperDataItem,
} from "components/types/types";

export const getProperData = (data: IFetchingData): IProperData => {
  const properData = data.hits.map(
    ({ id, webformatURL, largeImageURL, tags }: IProperDataItem) => {
      return {
        id,
        webformatURL,
        largeImageURL,
        tags,
      };
    }
  );
  return properData;
};
