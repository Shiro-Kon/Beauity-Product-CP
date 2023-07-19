import React from "react";
import { Button, Card, CardActions, CardContent } from "@mui/material";
import "./ProductListItem.scss";
import { useState } from "react";
import Quantity from "../Quantity/Quantity";
import ButtonBuy from "../ButtonBuy/ButtonBuy";

type Props = {
  id: number;
  title: string;
  description: string;
  type: string;
  price: number;
  image: string;
  sup: number;
};

const ProductListItem = ({
  id,
  title,
  description,
  type,
  price,
  image,
  sup,
}: Props) => {
  const [count, setCount] = useState<number>(1);

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
        <h4 className="product-title">{title}</h4>
        <div className="text-family">
          <div className="product-description">{description}</div>
          <div className="product-features">Type: {type}</div>
          <div className="product-price">
            $ {price}.<sup className="sup-up">{sup}</sup>
          </div>
        </div>

        <Quantity
          count={count}
          onDecrementClick={onDecrementClick}
          onIncrementClick={onIncrementClick}
          minCount={1}
        />
        <ButtonBuy />
      </CardContent>
    </Card>
  );
};

export default ProductListItem;
