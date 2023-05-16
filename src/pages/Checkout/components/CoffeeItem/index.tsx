import { Minus, Plus } from 'phosphor-react';
import {
  QuantitySelection,
  QuantitySelectionContainer,
} from '../../../Home/components/CoffeeCard/styles';
import { ButtonRemove } from '../RemoveButton';
import {
  ActionOptionsContainer,
  ActionsOptions,
  CoffeeDetailsContainer,
  CoffeeItemsContainer,
} from './styles';
import { useContext } from 'react';
import { CartContext } from '../../../../context/CartContext';

export function CoffeeItem({
  id,
  image,
  price,
  title,
  coin,
  quantity,
}: ItemCoffeeInterface) {
  const { removeItem, toIncrementCoffee, toDecrementCoffee } =
    useContext(CartContext);
  return (
    <CoffeeItemsContainer>
      <CoffeeDetailsContainer>
        <img src={image} />
        <ActionOptionsContainer>
          <label>{title}</label>
          <ActionsOptions>
            <QuantitySelectionContainer className="QuantityContainer">
              <QuantitySelection
                onClick={() => {
                  toDecrementCoffee(id);
                }}
              >
                <Minus weight="bold" size={14} />
              </QuantitySelection>
              <span>{quantity}</span>
              <QuantitySelection
                onClick={() => {
                  toIncrementCoffee(id);
                }}
              >
                <Plus weight="bold" size={14} />
              </QuantitySelection>
            </QuantitySelectionContainer>
            <ButtonRemove
              onClick={() => {
                removeItem(id);
              }}
            >
              Remover
            </ButtonRemove>
          </ActionsOptions>
        </ActionOptionsContainer>
      </CoffeeDetailsContainer>
      <div className="priceStrong">
        <strong>{coin}</strong>
        <strong>{price.toFixed(2)}</strong>
      </div>
    </CoffeeItemsContainer>
  );
}
