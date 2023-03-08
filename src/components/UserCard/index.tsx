import React from "react";
import { UserImage } from "../UserImage";

import {
  CardContainer,
  CardContent,
  InfoContent,
  NameText,
  Plantext,
} from "./styles";

export function UserCard() {
  return (
    <CardContainer>
      <CardContent>
        <UserImage />
        <InfoContent>
          <NameText>William Moraes</NameText>
          <Plantext>Planos: Premium</Plantext>
        </InfoContent>
      </CardContent>
    </CardContainer>
  );
}
