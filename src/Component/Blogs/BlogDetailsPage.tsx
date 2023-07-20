// BlogDetailsPage.tsx
import { useParams } from "react-router-dom";
import BlogArr from "../../utils/BlogArr";
import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import './BlogListItem.scss'

type BlogDetailsParams = {
  blogId: string;
};

const BlogDetailsPage = () => {
  const { blogId } = useParams<BlogDetailsParams>();
  const selectedBlog = BlogArr.find((blog) => blog.id === Number(blogId));

  if (!selectedBlog) {
    return <div>Blog not found!</div>;
  }

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
          {selectedBlog.title}
          <p className="link">
            <a className="links" href="/blog">
              Blog
            </a>
            <i className="arrow right"></i>{" "}
            <a className="links" href="/blog">
              {selectedBlog.title}
            </a>
          </p>
        </h2>
      </Typography>

     <Typography align="center" sx={{
          marginBottom: "30px", marginTop: "100px"
        }}>
            <Box >
      <Card variant="outlined" sx={{ width: "80%", marginLeft: "0px",}}>
      <CardContent><img className="image-bdp" src={selectedBlog.image} alt={selectedBlog.title} /></CardContent>
        
      </Card>
    </Box>
     </Typography>
          
       
    </div>
  );
};

export default BlogDetailsPage;
