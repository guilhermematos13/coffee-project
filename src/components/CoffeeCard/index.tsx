import {
  ActionsContainer,
  CoffeeCardContainer,
  CoffeeTitle,
  DescriptionCoffee,
  FooterCard,
  PriceTitle,
  QuantitySelection,
  QuantitySelectionContainer,
  ShoppingCartButton,
  TagTitle,
} from "./styles";
import TradicionalCoffee from "../../assets/TradicionalCoffee.svg";
import { Minus, Plus, ShoppingCart } from "phosphor-react";

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <img src={TradicionalCoffee} />

      <TagTitle>TRADICIONAL</TagTitle>

      <CoffeeTitle>Expresso Tradicional</CoffeeTitle>

      <DescriptionCoffee>
        O tradicional café feito com água quente e grãos moídos
      </DescriptionCoffee>

      <FooterCard>
        <PriceTitle>
          <p>R$</p>
          <strong className="Price">9,90</strong>
        </PriceTitle>
        <ActionsContainer>
          <QuantitySelectionContainer>
            <QuantitySelection>
              <Minus weight="bold" size={14} />
            </QuantitySelection>
            <span>1</span>
            <QuantitySelection>
              <Plus weight="bold" size={14} />
            </QuantitySelection>
          </QuantitySelectionContainer>

          <ShoppingCartButton>
            <ShoppingCart weight="fill" size={22} />
          </ShoppingCartButton>
        </ActionsContainer>
      </FooterCard>
    </CoffeeCardContainer>
  );
}
