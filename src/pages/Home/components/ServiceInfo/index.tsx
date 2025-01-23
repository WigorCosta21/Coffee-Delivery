import { ReactNode } from "react";

import * as S from "./styles";

type ServiceInfoProps = {
  icon: ReactNode;
  text: string;
  backgroundcolor: string;
};

export const ServiceInfo = ({
  icon,
  text,
  backgroundcolor,
}: ServiceInfoProps) => {
  return (
    <S.ServiceContainer backgroundcolor={backgroundcolor}>
      <div>{icon}</div>
      <span>{text}</span>
    </S.ServiceContainer>
  );
};
