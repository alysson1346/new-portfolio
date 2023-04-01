import { ButtonComponent } from "./style";

export const Button = ({ children, color }) => {
  return (
    <>
      <ButtonComponent color={color}>{children}</ButtonComponent>
    </>
  );
};
