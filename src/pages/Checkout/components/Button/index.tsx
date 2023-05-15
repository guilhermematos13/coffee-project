import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ButtonStyled } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
}

export function Button(props: ButtonProps) {
  return (
    <ButtonStyled {...props}>
      {props.icon}
      {props.children}
    </ButtonStyled>
  );
}
