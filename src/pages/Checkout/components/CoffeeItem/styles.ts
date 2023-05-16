import styled from 'styled-components';

export const CoffeeItemsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 0.75rem;

  @media screen and (max-width: 320px) {
  }
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
    align-items: start;

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

  .QuantityContainer {
    @media screen and (max-width: 420px) {
      svg {
        width: 9px;
        height: 9px;
      }

      span {
        font-size: 12px;
      }
    }
  }
`;
