import styled from "styled-components";

export const Container = styled.div``;

export const Wrapper = styled.div`
  max-width: 85rem;
  margin: 2rem auto;
  padding: 0 1rem;

  display: grid;
  grid-template-columns: 296px 1fr;
  gap: 1rem;
  align-items: flex-start;

  main {
    padding: 1.5rem;
    background-color: ${({ theme }) => theme.backgroundDark};
    border-radius: 16px;
  }
`;

export const PageTitleContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const PageInfos = styled.div``;

export const InfoTop = styled.p`
  color: ${({ theme }) => theme.fontColorDark};
`;

export const InfoTitle = styled.h2`
  color: ${({ theme }) => theme.fontColorLight};
  margin-top: 0.6rem;
`;

export const InfoResume = styled.p`
  color: ${({ theme }) => theme.fontColorDark};
  margin-top: 0.3rem;
`;

export const CreateButtom = styled.button`
  padding: 0.6rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.buttomPrimary};
  color: ${({ theme }) => theme.white};
  border: 0;
  cursor: pointer;
`;

export const BodyContent = styled.div`
  display: flex;
`;

export const InfoContent = styled.div`
  width: 100%;
  padding: 2rem;
`;

export const TitleContent = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  border-bottom: 2px solid ${({ theme }) => theme.backgroundLight};
`;

export const DateContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 3rem;
`;

export const TextContent = styled.div`
  width: 100%;
  padding: 2rem;
  h3 {
    margin-bottom: 2rem;
  }
`;
