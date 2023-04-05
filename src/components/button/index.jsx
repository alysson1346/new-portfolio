import { ButtonComponent } from "./style";

export const Button = ({ onClick, children, color }) => {
  return (
    <>
      <ButtonComponent onClick={onClick} color={color}>
        {children}
      </ButtonComponent>
    </>
  );
};
