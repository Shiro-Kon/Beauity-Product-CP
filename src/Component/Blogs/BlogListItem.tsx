import {  Card,  CardContent } from '@mui/material';
import './BlogListItem.scss'

type Props = {
  id: number;
  title: string;
  time: string;
  image: string;
  author: string;
};

const BlogListItem = ({
  id,
  title,
  time,
  image,
  author,

}: Props) => {
 

 

  return (
    <Card className="blog card"  variant="outlined">
      <CardContent>
        <div className="blog-img">
          <img src={image} alt="" />
        </div>
        <h4 className="blog-time"><a className='td-none author' href="#">{author}</a>{time}</h4>
        <a href='#' className="blog-description td-none">{title}</a>
       
      </CardContent>
    </Card>
  );
};

export default BlogListItem;
