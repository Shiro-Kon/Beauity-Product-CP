import {  Card,  CardContent } from '@mui/material';
import './BlogListItem.scss'
import { Link } from 'react-router-dom';

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
        <Link to={`/blog/${id}`}><img src={image} alt="" /></Link>
          
        </div>
        <h4 className="blog-time"><span className='td-none author' >{author}</span>{time}</h4>
        <Link to={`/blog/${id}`} className="blog-description td-none">{title}</Link>
       
      </CardContent>
    </Card>
  );
};

export default BlogListItem;
