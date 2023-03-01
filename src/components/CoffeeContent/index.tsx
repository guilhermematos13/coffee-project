import { CoffeeCard } from "../CoffeeCard";
import { CoffeeContentContainer, TitleCoffeeContent } from "./styles";

export function CoffeeContent() {
  return (
    <CoffeeContentContainer>
      <TitleCoffeeContent>Nossos cafés</TitleCoffeeContent>
      <CoffeeCard />
    </CoffeeContentContainer>
  );
}
