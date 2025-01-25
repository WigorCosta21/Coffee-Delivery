import { ReactNode } from "react";
import * as S from "./styles";

interface HeadingProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const Heading = ({ icon, title, description }: HeadingProps) => {
  return (
    <S.InfoContainer>
      {icon}
      <S.Info>
        <h3>{title}</h3>
        <p>{description}</p>
      </S.Info>
    </S.InfoContainer>
  );
};
