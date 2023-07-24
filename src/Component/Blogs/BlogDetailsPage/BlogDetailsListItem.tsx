import {  Card,  CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

type Props = {
  id: number;
  title: string;
  time: string;
  image: string;
  author: string;
};

const BlogDetailsListItem = ({
  id,
  title,
  time,
  image,
  author,

}: Props) => {
 

 

  return (
    <Card  style={{width: 350, height: 350 }} className='card' variant="outlined">
      <CardContent>
        <div >
        <Link to={`/blog/${id}`}><img width={"100%"} src={image} alt="" /></Link>
          
        </div>
        <h4  className="blog-time"><a className='td-none author' href="#">{author}</a>{time}</h4>
        <Link to={`/blog/${id}`} style={{fontSize: 30}} className="blog-description td-none">{title}</Link>
       
      </CardContent>
    </Card>
  );
};

export default BlogDetailsListItem;
