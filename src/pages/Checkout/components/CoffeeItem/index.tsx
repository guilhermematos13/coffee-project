import { Minus, Plus } from "phosphor-react";
import {
  QuantitySelection,
  QuantitySelectionContainer,
} from "../../../Home/components/CoffeeCard/styles";
import { ButtonRemove } from "../RemoveButton";
import {
  ActionOptionsContainer,
  ActionsOptions,
  CoffeeDetailsContainer,
  CoffeeItemsContainer,
} from "./styles";

export function CoffeeItem({
  image,
  price,
  title,
  coin,
  quantity,
}: ItemCoffeeInterface) {
  return (
    <CoffeeItemsContainer>
      <CoffeeDetailsContainer>
        <img src={image} />
        <ActionOptionsContainer>
          <label>{title}</label>
          <ActionsOptions>
            <QuantitySelectionContainer>
              <QuantitySelection>
                <Minus weight="bold" size={14} />
              </QuantitySelection>
              <span>{quantity}</span>
              <QuantitySelection>
                <Plus weight="bold" size={14} />
              </QuantitySelection>
            </QuantitySelectionContainer>
            <ButtonRemove>Remover</ButtonRemove>
          </ActionsOptions>
        </ActionOptionsContainer>
      </CoffeeDetailsContainer>
      <strong>{coin}</strong>
      <strong>{price.toFixed(2)}</strong>
    </CoffeeItemsContainer>
  );
}
