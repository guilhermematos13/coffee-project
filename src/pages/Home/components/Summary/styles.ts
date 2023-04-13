import styled from "styled-components";
import background from "../../../../assets/Background.svg";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
  padding: 5.75rem 160px;
  background-image: url(${background});
  background-size: contain;

  img {
    height: 25rem;
    width: 40rem;
  }

  @media screen and (max-width: 1024px) {
    img {
      display: none;
    }
  }

  @media screen and (max-width: 1440px) {
    img {
      height: 15rem;
      width: 30rem;
    }
  }
`;

export const TitleStrong = styled.strong`
  font-size: 3rem;
  font-weight: 800;
  line-height: 4rem;
  font-family: "Baloo 2", sans-serif;

  color: ${(props) => props.theme.baseTitle};
`;

export const SubtitleContainer = styled.div`
  margin-top: 1rem;
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${(props) => props.theme.baseTitle};
`;

export const ItemsContainer = styled.div`
  display: grid;
  gap: 1.25rem;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 4rem;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const ItemTitle = styled.p`
  color: ${(props) => props.theme.baseText};
`;

interface IconProps {
  variant?: "YellowDark" | "Yellow" | "Gray" | "Purple";
}

export const Icon = styled.span<IconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  width: 2rem;
  height: 2rem;
  border-radius: 999px;

  background-color: ${(props) =>
    props.variant === "YellowDark"
      ? props.theme.yellowDark
      : props.variant === "Yellow"
      ? props.theme.yellow
      : props.variant === "Gray"
      ? props.theme.baseText
      : props.theme.purple};
`;
