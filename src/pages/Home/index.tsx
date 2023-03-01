import { CoffeeContent } from "../../components/CoffeeContent";
import { Summary } from "../../components/Summary";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Summary />
      <CoffeeContent />
    </HomeContainer>
  );
}
