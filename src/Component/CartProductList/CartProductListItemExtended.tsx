import { Card, CardContent, Grid } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../Container/App/App";
import { Product } from "../../utils/ProductArr";
import Quantity from "../Quantity/Quantity";

type Props = { product: Product; productCount: number };

const CartProductListItemExtended = ({ product, productCount }: Props) => {
  const data = useContext(AppContext);

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{borderRadius: 10,}}>
        <CardContent  sx={{padding: 0,  textAlign: "center"}}>
          <img  width={"100%"} src={product.image} alt={product.title}/>
          <div className="product-title">{product.title}</div>
          <div className="product-features">
            <b>Price for one item:</b> {product.price}
          </div>
          <Quantity
            count={productCount}
            onDecrementClick={() =>
              data?.changeProductQuantity(product.id, productCount - 1)
            }
            onIncrementClick={() =>
              data?.changeProductQuantity(product.id, productCount + 1)
            }
            minCount={0}
          />
  <input type="button" value="Delete" className="delete-btn"
            onClick={() => data?.removeProductFromCart(product.id)} />
         
        </CardContent>
      </Card>
    </Grid>
  );
};
export default CartProductListItemExtended;
