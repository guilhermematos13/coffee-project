import {
  CartShoppingContainer,
  HeaderButton,
  HeaderContainer,
  LocaleButton,
  QuantityCoffee,
} from "./styles";
import Logo from "../../../../assets/LogoHeader.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";

export function Header() {
  const { coffees, itemsQuantity } = useContext(CartContext);

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={Logo} />
      </Link>
      <HeaderButton>
        <LocaleButton>
          <MapPin size={22} weight="fill" color="#8047F8" /> São Paulo, SP
        </LocaleButton>
        <CartShoppingContainer>
          <Link to="/checkout">
            <button>
              <ShoppingCart size={22} weight="fill" color="#C47F17" />
            </button>
          </Link>
          {coffees.length > 0 ? (
            <>
              <QuantityCoffee>{itemsQuantity()}</QuantityCoffee>
            </>
          ) : (
            <></>
          )}
        </CartShoppingContainer>
      </HeaderButton>
    </HeaderContainer>
  );
}
