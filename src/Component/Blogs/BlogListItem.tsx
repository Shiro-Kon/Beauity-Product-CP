import {  Card,  CardContent } from '@mui/material';
import './BlogListItem.scss'

type Props = {
  id: number;
  title: string;
  time: string;
  image: string;
};

const BlogListItem = ({
  id,
  title,
  time,
  image,

}: Props) => {
 

 

  return (
    <Card className="blog card"  variant="outlined">
      <CardContent>
        <div className="product-img">
          <img src={image} alt="" />
        </div>
        <h4 className="blog-time">{time}</h4>
        <div className="blog-description">{title}</div>
       
      </CardContent>
    </Card>
  );
};

export default BlogListItem;
