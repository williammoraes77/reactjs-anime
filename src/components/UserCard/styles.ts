import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: gray;
  padding: 0.6rem 1rem;
  background-color: ${({ theme }) => theme.backgroundDark};
  border-radius: 16px;
`;

export const CardContent = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: row;
`;

export const InfoContent = styled.div`
  padding: 1rem;
`;

export const NameText = styled.p`
  margin-top: 2px;
`;

export const Plantext = styled.p``;
