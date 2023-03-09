import {
  ArrowCircleUp,
  ChartBar,
  MonitorPlay,
  BookOpen,
} from "@phosphor-icons/react";
import { FC, SVGProps } from "react";
import { useTheme } from "styled-components";

import {
  BalanceContent,
  BottomContent,
  BottomLink,
  TopContent,
} from "./styles";

interface Props {
  name: string;
  amount: number;
  type: "anime" | "manga";
}

export function HomeCard({ name, amount, type }: Props) {
  const theme = useTheme();
  return (
    <BalanceContent>
      <TopContent>
        {type === "anime" ? (
          <MonitorPlay size={72} color={theme.fontColor} weight="fill" />
        ) : (
          <BookOpen size={72} color={theme.fontColor} weight="fill" />
        )}

        <header>
          <span>Total</span>
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
