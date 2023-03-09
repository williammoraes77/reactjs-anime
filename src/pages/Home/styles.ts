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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 2rem;
`;
