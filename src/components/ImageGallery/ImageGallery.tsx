import { ImageGalleryItem } from "components";
import { List } from "./ImageGallery.styled";
import { IImagesList } from "components/types/types";

export const ImageGallery: React.FC<IImagesList> = ({
  images,
  onOpenModal,
}) => {
  return (
    <List>
      {images.map((image) => {
        return (
          <ImageGalleryItem
            onClick={(event) => onOpenModal(event)}
            imageSrc={image.webformatURL}
            imageAlt={image.tags}
            imageLarge={image.largeImageURL}
            key={image.id}
          />
        );
      })}
    </List>
  );
};
