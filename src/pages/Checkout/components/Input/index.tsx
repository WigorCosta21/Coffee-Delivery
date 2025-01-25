import { forwardRef, InputHTMLAttributes, LegacyRef } from "react";
import * as S from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  gridarea: string;
  optional?: boolean;
  errors?: string;
};

export const Input = forwardRef(
  (
    { gridarea, optional, errors, ...props }: InputProps,
    ref: LegacyRef<HTMLInputElement>
  ) => {
    return (
      <S.InputContainer gridarea={gridarea}>
        <S.Label>
          <input {...props} ref={ref} />
          {optional && <span>Opcional</span>}
        </S.Label>
        {errors && <p>{errors}</p>}
      </S.InputContainer>
    );
  }
);
