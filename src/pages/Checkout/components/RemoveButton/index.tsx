import { Trash } from "phosphor-react";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonRemoveStyled } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function ButtonRemove(props: ButtonProps) {
  return (
    <ButtonRemoveStyled>
      <Trash size={16} />
      {props.children}
    </ButtonRemoveStyled>
  );
}
