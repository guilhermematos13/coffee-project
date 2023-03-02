import { InputHTMLAttributes } from "react";
import { InputForm, InputMasked } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  mask?: boolean;
}

export function Input(props: InputProps) {
  if (props.mask) {
    return <InputMasked {...props} mask="99999-999" />;
  }
  return <InputForm {...props} />;
}
