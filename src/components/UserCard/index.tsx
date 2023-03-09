import React from "react";
import { dateFormatter } from "../../utils/formatter";
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
          <Plantext>{dateFormatter.format(new Date())}</Plantext>
        </InfoContent>
      </CardContent>
    </CardContainer>
  );
}
