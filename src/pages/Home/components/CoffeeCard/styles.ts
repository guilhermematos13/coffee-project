import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  margin-top: 3.5rem;
  width: 16rem;
  background: ${(props) => props.theme.baseCard};
  border-radius: 0.375rem 2rem;

  svg {
    cursor: pointer;
  }

  img {
    margin-top: -3rem;
  }
`;

export const TagContainer = styled.div`
  display: flex;
  gap: 0.25rem;
`;

export const TagTitle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  padding: 0.25rem 0.5rem;
  margin-top: 0.75rem;
  height: 1.25rem;
  border-radius: 9999px;
  font-family: Roboto;
  font-weight: 700;
  font-size: 0.626rem;
  background-color: ${(props) => props.theme.yellowLight};
  color: ${(props) => props.theme.yellowDark};
`;

export const CoffeeTitle = styled.strong`
  font-size: 1.25rem;
  font-family: "Baloo 2";
  margin-top: 1rem;
`;

export const DescriptionCoffee = styled.p`
  font-size: 0.875rem;
  text-align: center;
  margin-top: 0.5rem;
  color: ${(props) => props.theme.baseLabel};
`;

export const FooterCard = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-top: 2rem;
`;

export const ActionsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const PriceTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.1rem;

  p {
    font-weight: 400;
    font-size: 0.75rem;
    color: ${(props) => props.theme.baseText};
  }

  strong {
    font-family: "Baloo 2";
    font-size: 1.5rem;
    font-weight: 800;
    line-height: 130%;
  }
`;
export const QuantitySelectionContainer = styled.div`
  display: flex;
  padding: 0.5rem;
  height: 2.375rem;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
  border-radius: 6px;
  background: ${(props) => props.theme.baseButton};
`;

export const QuantitySelection = styled.button`
  display: flex;
  align-items: center;
  border: 0;
  justify-content: center;
  background: transparent;
  border-radius: 6px;
  cursor: pointer;

  svg {
    color: ${(props) => props.theme.purple};

    &:hover {
      color: ${(props) => props.theme.purpleDark};
      transition: 0.2s;
    }
  }
`;

export const ShoppingCartButton = styled.button`
  display: flex;
  justify-content: center;
  border: 0;
  padding: 0.5rem;
  border-radius: 6px;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.purpleDark};
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.purple};
    transition: 0.2s;
  }
`;
