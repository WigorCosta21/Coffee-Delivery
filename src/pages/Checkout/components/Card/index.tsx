import { ReactNode } from "react";
import * as S from "./styles";

interface CardProps {
  children: ReactNode;
  borderradius?: string;
}

export const Card = ({ children, borderradius = "6px" }: CardProps) => {
  return (
    <S.CardContainer borderradius={borderradius}>{children}</S.CardContainer>
  );
};
