import { ILoadButton } from "components/types/types";
import { Button } from "./Button.styled";

export const LoadButton: React.FC<ILoadButton> = ({ onClick }) => {
  return (
    <Button onClick={onClick} type="button">
      Load more
    </Button>
  );
};
