import { Link } from "react-router-dom";
import { Product } from "../../utils/ProductArr";
import { Card, CardContent} from "@mui/material";
import "./CartSelected.scss"
type Props = {
  product: Product;
  id: number;
};

const CartSelectedListItemExtended = ({ product}: Props) => {
  return (
    <>
      <Card className="card-favorite" sx={{ borderRadius: 10, }}>
        <CardContent sx={{ padding: 0, textAlign: "center",  }}>
            <img width={"100%"} src={product.image} alt={product.title} />
            <h5 className="product-title">{product.title} </h5>
            <div className="price">${product.price}</div>
            <Link to={`/products`}>
              <div className="info">More information</div>
            </Link>
            
        </CardContent>
      </Card>
    </>
  );
};

export default CartSelectedListItemExtended;
