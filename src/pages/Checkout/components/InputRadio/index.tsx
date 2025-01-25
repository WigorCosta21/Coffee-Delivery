import { forwardRef, InputHTMLAttributes, LegacyRef, ReactNode } from "react";
import * as S from "./styles";

type InputRadioProps = InputHTMLAttributes<HTMLInputElement> & {
  isselected: boolean;
  children: ReactNode;
  changePayment: () => void;
};

export const InputRadio = forwardRef(
  (
    { isselected, changePayment, children, ...props }: InputRadioProps,
    ref: LegacyRef<HTMLInputElement>
  ) => {
    return (
      <S.Label isselected={isselected} onClick={changePayment}>
        <input type="radio" name="payment" ref={ref} {...props} />
        {children}
      </S.Label>
    );
  }
);
