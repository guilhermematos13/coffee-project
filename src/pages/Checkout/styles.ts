import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  width: 100%;
  padding: 2rem 10rem;
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: calc(60% - 2rem) calc(40%);
  gap: 2rem;

  @media screen and (max-width: 1440px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const CoffeeSelectContainer = styled.div`
  width: 100%;
  display: grid;
  padding: 2.5rem;
  background: ${(props) => props.theme.baseCard};
  grid-template-columns: auto;
  border-bottom: 1px solid ${(props) => props.theme.baseButton};
  border-radius: 6px 44px;
  margin-top: 1rem;
`;

export const Line = styled.div`
  border: 1px solid ${(props) => props.theme.baseButton};
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const OrderDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleForm = styled.strong`
  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 1.125rem;
  margin-bottom: 1rem;
`;

export const PaymentDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;

  .linePayment {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }

  strong {
    font-size: 1.25rem;
    color: ${(props) => props.theme.baseSubTitle};
  }
`;

export const ValueDetailsTitle = styled.p`
  font-size: 0.75rem;
  color: ${(props) => props.theme.baseText};
`;

export const ValuesDetailsPrice = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.baseText};
`;

export const ConfirmedOrderButton = styled.button`
  width: 100%;
  border: 0;
  padding: 0.75rem 0.5rem;
  margin-top: 1.5rem;
  font-size: 0.875rem;
  font-weight: bold;
  text-transform: uppercase;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.yellow};
  border-radius: 6px;
  cursor: pointer;
`;
