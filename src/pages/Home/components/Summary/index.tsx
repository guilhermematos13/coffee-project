import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import SummaryImage from '../../../../assets/HomeImage.svg';
import {
  Container,
  Icon,
  Item,
  ItemTitle,
  ItemsContainer,
  Subtitle,
  SubtitleContainer,
  TitleStrong,
} from './styles';

export function Summary() {
  return (
    <Container>
      <div>
        <p>
          <TitleStrong>Encontre o café perfeito </TitleStrong>
        </p>
        <p>
          <TitleStrong>para qualquer hora do dia</TitleStrong>
        </p>
        <SubtitleContainer>
          <p>
            <Subtitle>
              Com o Coffee Delivery você recebe seu café onde estiver, a
            </Subtitle>
          </p>
          <p>
            <Subtitle>qualquer hora</Subtitle>
          </p>
        </SubtitleContainer>
        <ItemsContainer>
          <Item>
            <Icon variant="YellowDark">
              <ShoppingCart weight="fill" color="#FFFFFF" />
            </Icon>
            <ItemTitle>Compra simples e segura</ItemTitle>
          </Item>
          <Item>
            <Icon variant="Gray">
              <Package weight="fill" color="#FFFFFF" />
            </Icon>
            <ItemTitle>Embalagem mantém o café intacto</ItemTitle>
          </Item>
          <Item>
            <Icon variant="Yellow">
              <Timer weight="fill" color="#FFFFFF" />
            </Icon>
            <ItemTitle>Entrega rápida e rastreada</ItemTitle>
          </Item>
          <Item>
            <Icon variant="Purple">
              <Coffee weight="fill" color="#FFFFFF" />
            </Icon>
            <ItemTitle>O café chega fresquinho até você</ItemTitle>
          </Item>
        </ItemsContainer>
      </div>

      <img
        src={SummaryImage}
        alt="Uma imagem com um copo de isopor branco e preto ao centro com um fundo amarelo ao lado esquerdo do copo contém grãos de café e ao lado direito grãos e pós de café"
      />
    </Container>
  );
}
