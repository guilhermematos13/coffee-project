import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  padding: 2rem 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 2.5rem;
    width: 5.25rem;
    cursor: pointer;
  }

  @media screen and (max-width: 425px) {
    img {
      height: 3rem;
      width: 4.5rem;
    }
    padding: 2rem;
  }

  @media screen and (max-width: 320px) {
    img {
      height: 2.5rem;
      width: 3.5rem;
    }
    padding: 2rem;
  }
`;

export const LocaleButton = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme.purpleDark};
  height: 2.5rem;
  background-color: ${(props) => props.theme.purpleLight};
  padding: 0.5rem;
  border-radius: 6px;

  @media screen and (max-width: 425px) {
    font-size: 0.75rem;
  }
`;

export const HeaderButton = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  button {
    display: flex;
    border: 0;
    border-radius: 6px;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    height: 2.5rem;

    background: ${(props) => props.theme.yellowLight};
    cursor: pointer;
  }
`;

export const CartShoppingContainer = styled.div`
  display: flex;
`;

export const QuantityCoffee = styled.span`
  margin-left: -12px;
  margin-top: -8px;
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9999px;
  font-weight: bold;

  font-size: 0.75rem;
  background: ${(props) => props.theme.yellowDark};
  color: ${(props) => props.theme.white};
`;
