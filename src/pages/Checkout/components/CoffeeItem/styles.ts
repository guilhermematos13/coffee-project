import styled from 'styled-components';

export const CoffeeItemsContainer = styled.div`
  width: 100%;
  padding: 0.25rem 0.5rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 0.75rem;
`;

export const CoffeeDetailsContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  gap: 1.25rem;

  label {
    color: ${(props) => props.theme.baseSubTitle};
  }

  @media screen and (max-width: 425px) {
    display: flex;
    flex-direction: column;
    gap: 8px;

    label {
      font-size: 0.75rem;
    }

    img {
      width: 70px;
      height: 70px;
    }
  }
`;

export const ActionOptionsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ActionsOptions = styled.div`
  display: flex;
  gap: 0.5rem;
`;
