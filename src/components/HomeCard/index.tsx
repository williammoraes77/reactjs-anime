import { ArrowCircleUp, ChartBar } from "@phosphor-icons/react";
import { FC, SVGProps } from "react";

import { priceFormatter } from "../../utils/formatter";
import {
  BalanceContent,
  BottomContent,
  BottomLink,
  TopContent,
} from "./styles";

interface Props {
  name: string;
  amount: number;
  // icon?: FC<SVGProps>;
}

export function HomeCard({ name, amount }: Props) {
  return (
    <BalanceContent>
      <TopContent>
        <ChartBar size={72} />
        <header>
          <span>Entradas</span>
          <strong>{amount}</strong>
        </header>

        <ArrowCircleUp size={32} color="#00b37e" />
      </TopContent>
      <BottomContent>
        <BottomLink>{name}</BottomLink>
      </BottomContent>
    </BalanceContent>
  );
}
