import { HeaderButton, HeaderContainer } from "./styles";
import Logo from "../../../../assets/LogoHeader.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={Logo} />
      </Link>
      <HeaderButton>
        <span>
          <MapPin size={22} weight="fill" color="#8047F8" /> São Paulo, SP
        </span>
        <Link to="/checkout">
          <button>
            <ShoppingCart size={22} weight="fill" color="#C47F17" />
          </button>
        </Link>
      </HeaderButton>
    </HeaderContainer>
  );
}
