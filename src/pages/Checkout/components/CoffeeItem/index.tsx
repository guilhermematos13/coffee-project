import { Minus, Plus, Trash } from "phosphor-react";
import ExpressoTradicional from "../../../../data/assets/expresso.svg";
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

export function CoffeeItem({ title, image, price }: ItemCoffeeInterface) {
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
              <span>1</span>
              <QuantitySelection>
                <Plus weight="bold" size={14} />
              </QuantitySelection>
            </QuantitySelectionContainer>
            <ButtonRemove>Remover</ButtonRemove>
          </ActionsOptions>
        </ActionOptionsContainer>
      </CoffeeDetailsContainer>
      <strong>{price}</strong>
    </CoffeeItemsContainer>
  );
}
