import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";
import { InputForm, InputMasked } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  mask?: boolean;
}

export const Input = forwardRef(
  (props: InputProps, ref: ForwardedRef<never>) => {
    console.log(props);
    if (props.mask) {
      return <InputMasked {...props} mask="99999-999" ref={ref} />;
    }
    return <InputForm {...props} ref={ref} />;
  }
);
