import {
  Box,
  Card,
  CardContent,
  Grid,
  Rating,
} from "@mui/material";
import "./ProductListItem.scss";
import { useState } from "react";
import Quantity from "../Quantity/Quantity";
import { toggleFavorite } from "../../redux/FavoriteReducer";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  addProductToFavorite,
  removeProductFromFavorite,
} from "../../redux/SelectedListReducer";
import {
  FavoriteDecrement,
  FavoriteIncrement,
} from "../../redux/FavoriteCounterReducer";

type Props = {
  id: number;
  title: string;
  description: string;
  type: string;
  price: number;
  image: string;
  addProductToCart: (id: number, count: number) => void;
};

const ProductListItem = ({
  id,
  title,
  description,
  type,
  price,
  image,
  addProductToCart,
}: Props) => {
  const [count, setCount] = useState<number>(1);
  const [value, setValue] = useState<number | null>(4);
  const [status, setStatus] = useState<number>(0);

  const isFavorite = useAppSelector((state) => state.productsFavoriteState[id]);

  const dispath = useAppDispatch();

  const FavoriteFun = () => {
    {
      isFavorite
        ? dispath(removeProductFromFavorite({ id, status }))
        : dispath(addProductToFavorite({ id, status }));
    }
    {
      isFavorite ? dispath(FavoriteDecrement()) : dispath(FavoriteIncrement());
    }
  };

  const onIncrementClick = () => {
    setCount((prevState) => prevState + 1);
  };

  const onDecrementClick = () => {
    setCount((prevState) => prevState - 1);
  };

  return (
    <Card className="product card" variant="outlined">
      <CardContent>
        <div className="product-img">
          <img src={image} alt="" />
        </div>
        <h4 className="product-title">{title} </h4>
        <div className="text-family">
          <div className="product-description">{description}</div>
          <div className="product-features">Type: {type}</div>
          <Box sx={{ "& > legend": { mt: 2 } }}>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </Box>
          <div className="product-price">{price}$</div>
        </div>

        <Quantity
          count={count}
          onDecrementClick={onDecrementClick}
          onIncrementClick={onIncrementClick}
          minCount={1}
        />

        <Grid container>
          <Grid item xs={10}>
            {" "}
            <input
              type="button"
              className="buy-btn"
              value="Buy"
              onClick={() => addProductToCart(id, count)}
            />
          </Grid>
          <Grid item xs={2}>
            <button
              onClick={() => (dispath(toggleFavorite(id)), FavoriteFun())}
              className="product-favorite-btn"
            >
              {isFavorite ? (
                <img
                  className=" favorite-active"
                  src="./images/favorite.png"
                  alt=""
                />
              ) : (
                <img
                  className=" favorite-passive "
                  src="./images/favorite.png"
                  alt=""
                />
              )}
            </button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ProductListItem;


