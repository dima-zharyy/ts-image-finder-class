import { IItemProps } from "components/types/types";
import { Item, Image } from "./ImageGalleryItem.styled";

export const ImageGalleryItem: React.FC<IItemProps> = ({
  imageLarge,
  imageSrc,
  imageAlt,
  onClick,
}) => {
  return (
    <Item>
      <Image
        onClick={onClick}
        src={imageSrc}
        alt={imageAlt}
        data-large-image-url={imageLarge}
        loading="lazy"
      />
    </Item>
  );
};
