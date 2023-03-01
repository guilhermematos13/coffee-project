import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import SummaryImage from "../../../../assets/HomeImage.svg";
import {
  IconsSummary,
  SummaryContainer,
  SummaryHeader,
  SummarySection,
} from "./styles";

export function Summary() {
  return (
    <SummaryContainer>
      <SummaryHeader>
        <strong>
          Encontre o café perfeito <br></br> para qualquer hora do dia
        </strong>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a<br></br>
          qualquer hora
        </p>
        <SummarySection>
          <span>
            <IconsSummary variant="yellowDark">
              <ShoppingCart weight="fill" />
            </IconsSummary>
            Compra simples e segura
          </span>
          <span>
            <IconsSummary variant="gray">
              <Package weight="fill" />
            </IconsSummary>
            Embalagem mantém o café intacto
          </span>
          <span>
            <IconsSummary variant="yellow">
              <Timer weight="fill" />
            </IconsSummary>
            Entrega rápida e rastreada
          </span>
          <span>
            <IconsSummary variant="purple">
              <Coffee weight="fill" />
            </IconsSummary>
            O café chega fresquinho até você
          </span>
        </SummarySection>
      </SummaryHeader>
      <img
        src={SummaryImage}
        alt="Uma imagem com um copo de isopor branco e preto ao centro com um fundo amarelo ao lado esquerdo do copo contém grãos de café e ao lado direito grãos e pós de café"
      />
    </SummaryContainer>
  );
}
