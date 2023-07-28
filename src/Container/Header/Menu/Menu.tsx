import MenuItem from "./MenuItem";

type Props = {productsInCart: {
  [id: number]: number
}};

const Menu = ({ productsInCart }: Props) => {
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
          <MenuItem to="/basket">
            <img src="./images/basket.png" className="basket" />
            
          </MenuItem>
          <span className="quantity-in-basket">
                                            {''}
                                            {Object.keys(productsInCart).reduce(
                                                (count, productId) =>
                                                    count +
                                                    productsInCart[
                                                        parseInt(productId)
                                                    ],
                                                0
                                            )}
                                        </span>
          
        </div>
    </>
  );
};

export default Menu;
