import { useAppSelector } from "../../../redux/hooks";
import MenuItem from "./MenuItem";

type Props = {
  productsInCart: {
    [id: number]: number;
  };
};

const Menu = ({ productsInCart }: Props) => {
  const FavoriteCounter = useAppSelector(
    (state) => state.FavoriteCounter.FavoriteCounter
  );

  return (
    <>
      <MenuItem to="/">Home</MenuItem>
      <MenuItem to="/products">Products</MenuItem>
      <MenuItem to="/blog">Blog</MenuItem>
      <MenuItem to="/contacts">Contacts</MenuItem>
      <input className="search" type="search" placeholder="Search" />
      <div className="button-header">
        <MenuItem to="/favorite">
          <img src="./images/favorite.png" className="favorite" />
        </MenuItem>
        <span className="quantity-favorite">{FavoriteCounter}</span>

        <MenuItem to="/basket">
          <img src="./images/basket.png" className="basket" />
        </MenuItem>
        <span className="quantity-basket">
          {Object.keys(productsInCart).reduce(
            (count, productId) => count + productsInCart[parseInt(productId)],
            0
          )}
        </span>
      </div>
    </>
  );
};

export default Menu;
