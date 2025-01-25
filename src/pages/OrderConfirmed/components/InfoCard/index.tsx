import { useTheme } from "styled-components";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

import * as S from "./styles";

export const InfoCard = () => {
  const theme = useTheme();

  return (
    <S.Card>
      <S.InfoContent>
        <S.Info>
          <S.Icon backgroundcolor={theme.colors.purple}>
            <MapPin size={16} weight="fill" />
          </S.Icon>

          <div>
            <p>
              Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
            </p>
            <p>Farrapos - Porto Alegre, RS</p>
          </div>
        </S.Info>

        <S.Info>
          <S.Icon backgroundcolor={theme.colors.yellow}>
            <Timer size={16} weight="fill" />
          </S.Icon>

          <div>
            <p>Previsão de entrega</p>
            <p>
              <strong>20 min - 30 min</strong>{" "}
            </p>
          </div>
        </S.Info>

        <S.Info>
          <S.Icon backgroundcolor={theme.colors["yellow-dark"]}>
            <CurrencyDollar size={16} />
          </S.Icon>

          <div>
            <p>Pagamento na entrega</p>
            <p>
              <strong>Cartão de Crédito</strong>
            </p>
          </div>
        </S.Info>
      </S.InfoContent>
    </S.Card>
  );
};
