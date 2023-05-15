import { CoffeeList } from '../../../../data/CoffeeList';
import { CoffeeCard } from '../CoffeeCard';
import {
  CoffeeContentContainer,
  Container,
  TitleCoffeeContent,
} from './styles';

export function CoffeeContent() {
  return (
    <Container>
      <TitleCoffeeContent>Nossos cafés</TitleCoffeeContent>
      <CoffeeContentContainer>
        {CoffeeList.map((coffee) => (
          <CoffeeCard coffee={coffee} key={coffee.id} />
        ))}
      </CoffeeContentContainer>
    </Container>
  );
}
