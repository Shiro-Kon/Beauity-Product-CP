import { Card, CardContent } from '@mui/material';
import './ContactsListItem.scss'

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
    <Card className="contacts card"  variant="outlined">
      <CardContent>
        <div className="contacts-img">
          <img src={image}  />
        </div>
        <div className="title-local">{title}</div>
        <div className="adress">
            {location}
            {victoria}
            {country}
        </div>
        <div className="map-check">
            {check}
        </div>
        
       
      </CardContent>
    </Card>
  );
};

export default ContatcsListItem;
