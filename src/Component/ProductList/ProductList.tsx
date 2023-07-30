import { useState } from "react";
import { Grid, Typography, Button } from "@mui/material";
import ProductListItem from "./ProductListItem";
import ProductsArr from "../../utils/ProductArr";
import { Link } from "react-router-dom";

type Props = { addProductToCart: (id: number, count: number) => void };

const ProductList = ({ addProductToCart }: Props) => {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const handleFilterClick = (type: string | null) => {
    setSelectedType(type);
  };

  const filteredProducts = selectedType
    ? ProductsArr.filter((product) => product.type === selectedType)
    : ProductsArr;

  return (
    <>
      <Typography
        component="h2"
        variant="h3"
        align="center"
        sx={{
          marginBottom: "30px",
        }}
      >
        <h2>
          Shop
          <p className="link">
            <Link className="links" to={`/`}>
              Home
            </Link>{" "}
            <i className="arrow right"></i>
            <Link className="links" to={`/products`}>
              Products
            </Link>
          </p>
        </h2>
      </Typography>
      <Typography
        align="center"
        sx={{
          marginBottom: "30px",
        }}
      >
        {" "}
        <button className="btn-filter" onClick={() => handleFilterClick(null)}>
          All
        </button>
        <button className="btn-filter" onClick={() => handleFilterClick("Oil")}>
          Oil
        </button>
        <button
          className="btn-filter"
          onClick={() => handleFilterClick("Conditioner")}
        >
          Conditioner
        </button>
        <button
          className="btn-filter"
          onClick={() => handleFilterClick("Toilette")}
        >
          Toilette
        </button>
        <button className="btn-filter" onClick={() => handleFilterClick("Gel")}>
          Gel
        </button>
        <button
          className="btn-filter"
          onClick={() => handleFilterClick("Cream")}
        >
          Cream
        </button>
        <button
          className="btn-filter"
          onClick={() => handleFilterClick("Toning")}
        >
          Toning
        </button>
      </Typography>

      <Grid container spacing={4}>
        {filteredProducts.map(
          ({ id, title, description, type, price, image }) => (
            <Grid item xs={12} sm={6} md={4} key={id}>
              <ProductListItem
                id={id}
                title={title}
                description={description}
                type={type}
                price={price}
                image={image}
                addProductToCart={addProductToCart}
              />
            </Grid>
          )
        )}
      </Grid>
    </>
  );
};

export default ProductList;
