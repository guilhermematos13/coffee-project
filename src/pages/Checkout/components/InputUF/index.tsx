import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import { InputForm } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const InputUF = forwardRef(
  (props: InputProps, ref: ForwardedRef<never>) => {
    return <InputForm {...props} ref={ref} />;
  }
);
