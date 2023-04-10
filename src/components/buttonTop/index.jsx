import { Button } from "./style";
import { Arrow } from "./style";

export const ButtonTop = () => {
  return (
    <>
      <Button
        onClick={(e) => {
          e.preventDefault();
          return window.scrollTo(0, 0);
        }}
      >
        <Arrow></Arrow>
      </Button>
    </>
  );
};
