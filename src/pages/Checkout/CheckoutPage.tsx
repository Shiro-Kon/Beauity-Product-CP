import { Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CheckoutPage.scss";

type Props = {};

type Order = {
  name: string;
  address: string;
};

const CheckoutPage = (props: Props) => {
  const [orderData, setOrderData] = useState<Order>({
    name: "",
    address: "",
  });

  const [isOrderSend, setIsOrderSend] = useState<boolean>(false);

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrderData((prevState) => ({
      ...prevState,
      name: e.target.value,
    }));
  };
  const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrderData((prevState) => ({
      ...prevState,
      address: e.target.value,
    }));
  };

  const onSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios
      .post("https://my-json-server.typicode.com/kznkv-skillup/server/orders", {
        name: orderData.name,
        address: orderData.address,
      })
      .then((res) => res.data)
      .then(({ name, address }) => {
        setOrderData({ name, address });
        setIsOrderSend(true);
      })
      .catch((e) => console.log(e));
  };

  const renderForm = () => {
    return (
      <form onSubmit={onSend}>
        <Typography component="h1" variant="h3" align="center">
          <div className="">
            <input
              className="form-text"
              type="text"
              placeholder="Name"
              value={orderData.name}
              onChange={handleName}
            />
          </div>
          <div>
            <input
              className="form-text"
              type="text"
              placeholder="Address"
              value={orderData.address}
              onChange={handleAddress}
            />
          </div>
          <button className="btn-send" type="submit">
            Send
          </button>{" "}
        </Typography>
      </form>
    );
  };

  const renderMessage = () => {
    return (
      <Typography
        component="h1"
        variant="h3"
        align="center"
        sx={{
          marginBottom: "30px",
          marginTop: "100px",
        }}
      >
        <div>Dear, {orderData.name} thanks for your order!</div>
        <div>Address: {orderData.address}</div>
      </Typography>
    );
  };

  return (
    <div>
      <Typography
        component="h2"
        variant="h3"
        align="center"
        sx={{
          marginBottom: "30px",
        }}
      >
        <h2>
          Checkout
          <p className="link">
            <Link className="links" to={"/basket"}>
              Basket
            </Link>{" "}
            <i className="arrow right"></i>{" "}
            <Link className="links" to={"/checkout"}>
              Checkout
            </Link>
          </p>
        </h2>
      </Typography>
      {isOrderSend ? renderMessage() : renderForm()}
    </div>
  );
};

export default CheckoutPage;
