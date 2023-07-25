// BlogDetailsPage.tsx
import { Link, useParams } from "react-router-dom";
import BlogArr from "../../../utils/BlogArr";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import "./BlogDetailsPage.scss";
import BlogDetailsList from "./BLogDetailsList";

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
    <>
      <div className="bg-title">
        <Typography
          component="h2"
          variant="h3"
          align="center"
          sx={{
            marginBottom: "30px",
          }}
        >
          <h2 >
            {selectedBlog.title}
            
          </h2>
          
        </Typography>
      </div>
      <div className="blog-datails">
        <Typography
          align="center"
          sx={{
            marginBottom: "30px",
            marginTop: "100px",
          }}
        >
          <Card  variant="outlined" sx={{  }}>
            <CardContent>
              <img
                className="image-bdp"
                src={selectedBlog.image}
                alt={selectedBlog.title}
              />
            </CardContent>
            <CardContent>
              <Typography align="center" > <p className="p-center">
                  Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostruoccaecat cupidatat non proident.
                </p></Typography>
             
            </CardContent>

            <CardContent>
              <hr />
            </CardContent>
            <CardContent>
            <Typography align="left"> 
                <h1 className="h1-left">
Quantum postre verto anime mila quanti</h1>
                <p className="p-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostruoccaecat cupidatat non proident, sunt in culpa qui officia.</p>
                <p className="p-left"><img  className="img-blog-details" src="../images/Quantum-img.webp" alt="" />
                </p>
                <p className="p-left">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctu dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.ipsum dolor sit amet.</p>
              </Typography>
            </CardContent>
            <CardContent>
              <hr />
            </CardContent>
            <CardContent>
              <Typography align="right">
                <h1 className="h1-right">
Usage</h1>
                <p className="p-right">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                <p className="p-right"> <img className="img-blog-details" src="../images/Usage-img.webp" alt="" /></p>
              </Typography>
            </CardContent>
            <CardContent>
              <hr />
            </CardContent>
            <CardContent>
            <Typography align="left"> 
                <h1 className="h1-left">
Quantum postre quanti</h1>
               
                <p className="p-left">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctu dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.ipsum dolor sit amet.</p>
              </Typography>
            </CardContent>
          </Card>
        </Typography>
      </div>
      <Typography align="center"><BlogDetailsList/></Typography>

    </>
  );
};

export default BlogDetailsPage;
