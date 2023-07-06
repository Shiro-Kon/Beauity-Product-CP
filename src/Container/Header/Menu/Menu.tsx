import MenuItem from "./MenuItem";

type Props = {};

const Menu = (props: Props) => {
  return (
    <>
      <MenuItem to="/">Home</MenuItem>
      <MenuItem to="/products">Products</MenuItem>
      <MenuItem to="/blog">Blog</MenuItem>
      <MenuItem to="/contacts">Contacts</MenuItem>
      <div className="button-header">
        <MenuItem to="/favorite">
          <img src="./images/favorite.png" className="favorite" />
        </MenuItem>
        <MenuItem to="/basket">
          <img src="./images/basket.png" className="basket" />
        </MenuItem>
      </div>
    </>
  );
};

export default Menu;
