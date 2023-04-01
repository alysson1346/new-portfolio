import { Titles } from "./style";

export const Title = ({ children, black }) => {
  return (
    <>
      <Titles black={black}>{children}</Titles>
    </>
  );
};
