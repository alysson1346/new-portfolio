import { Button } from "./style";
import { Arrow } from "./style";
//import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

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
