import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import { InputSuffixStyled } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  suffix: string;
}

export const InputSuffix = forwardRef(
  (props: InputProps, ref: ForwardedRef<never>) => {
    return (
      <InputSuffixStyled>
        <input {...props} ref={ref} />
        <span>{props.suffix}</span>
      </InputSuffixStyled>
    );
  }
);
