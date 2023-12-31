import { Grid } from "@mui/material";
import ProductsArray from "../../utils/ProductArr";
import HomeProductListItem from "./HomeProductListItem";
import { Link } from "react-router-dom";

type Props = {};

const HomeProductList = (props: Props) => {
  return (
    <>
      <Grid container spacing={2}>
        {ProductsArray.map(
          ({
            id,
            title,
            price,
            image,
          }) => (
            <Grid item xs={12} sm={6} md={3} key={id}>
              <Link to={"/products"}>
                <HomeProductListItem
                  id={id}
                  title={title}
                  price={price}
                  image={image}
                />
              </Link>
            </Grid>
          )
        )}
      </Grid>
    </>
  );
};

export default HomeProductList;
