import { HeaderButton, HeaderContainer } from "./styles";
import Logo from "../../assets/LogoHeader.svg";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} />
      <HeaderButton>
        <span>
          <MapPin size={22} weight="fill" color="#8047F8" /> São Paulo, SP
        </span>
        <button>
          <ShoppingCart size={22} weight="fill" color="#C47F17" />
        </button>
      </HeaderButton>
    </HeaderContainer>
  );
}
