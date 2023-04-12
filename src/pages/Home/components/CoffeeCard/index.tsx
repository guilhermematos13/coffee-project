import { useState } from "react";
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
  TagContainer,
  TagTitle,
} from "./styles";
import { Minus, Plus, ShoppingCart } from "phosphor-react";

export function CoffeeCard({ coffee }: { coffee: CoffeeListInterface }) {
  const [count, setCount] = useState(1);

  function incrementCount() {
    setCount(count + 1);
  }

  function decrementCount() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  return (
    <CoffeeCardContainer key={coffee.id}>
      <img src={coffee.image} />
      <TagContainer>
        {coffee.tags.map((tag) => (
          <TagTitle key={tag}>{tag}</TagTitle>
        ))}
      </TagContainer>
      <CoffeeTitle>{coffee.title}</CoffeeTitle>

      <DescriptionCoffee>{coffee.description}</DescriptionCoffee>

      <FooterCard>
        <PriceTitle>
          <p>{coffee.coin}</p>
          <strong className="Price">{coffee.price}</strong>
        </PriceTitle>
        <ActionsContainer>
          <QuantitySelectionContainer>
            <QuantitySelection>
              <Minus weight="bold" size={14} onClick={decrementCount} />
            </QuantitySelection>
            <span>{count}</span>
            <QuantitySelection>
              <Plus weight="bold" size={14} onClick={incrementCount} />
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
