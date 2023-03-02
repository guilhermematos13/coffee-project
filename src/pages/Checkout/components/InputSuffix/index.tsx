import { InputHTMLAttributes } from "react";
import { InputSuffixStyled } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  suffix: string;
}

export function InputSuffix(props: InputProps) {
  return (
    <InputSuffixStyled>
      <input {...props} />
      <span>{props.suffix}</span>
    </InputSuffixStyled>
  );
}
