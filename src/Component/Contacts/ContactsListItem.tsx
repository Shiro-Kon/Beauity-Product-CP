import { Card, CardContent } from "@mui/material";
import "./ContactsListItem.scss";

type Props = {
  id: number;
  title: string;
  location: string;
  victoria: string;
  country: string;
  check: string;
  image: string;
};

const ContatcsListItem = ({
  id,
  title,
  location,
  victoria,
  country,
  check,
  image,
}: Props) => {
  return (
    <Card className="contacts card" variant="outlined">
      <CardContent>
        <div className="contacts-img">
          <img src={image} alt={title} />
        </div>
        <div className="title-local">{title}</div>
        <div className="adress">
          <p>{location}</p>
          <p>{victoria}</p>
          <p>{country}</p>
        </div>
        <div className="map-check">
          <span >{check}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContatcsListItem;
