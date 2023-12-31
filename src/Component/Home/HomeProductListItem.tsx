import { Box, Card, CardContent, Rating} from "@mui/material";
import { useState } from "react";

type Props = {
  id: number;
  title: string;
  price: number;
  image: string;
};

const HomeProductListItem = ({  title, price, image }: Props) => {
  const [value, setValue] = useState<number | null>(2);

  return (
    <Card className="card">
      <CardContent sx={{ padding: 0, textAlign: "center" }}>
        <div>
          <img width={"100%"} src={image}  alt={title}/>
        </div>
        <h4 className="product-title">{title}</h4>
        <div className="text-family">
          <Box sx={{ "& > legend": { mt: 2.5 } }}>
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
      </CardContent>
    </Card>
  );
};

export default HomeProductListItem;
