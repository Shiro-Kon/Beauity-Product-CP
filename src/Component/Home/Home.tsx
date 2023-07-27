import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import "./Home.scss";
import HomeProductList from "./HomeProductList";
import BlogSwiper from "../Swiper/BlogSwiper";

type Props = {};



const Home = (props: Props) => {
 
  return (
    <>
    <BlogSwiper/>
      <Grid
        sx={{
          width: "1400px",
          height: "700px",
          marginLeft: "-130px",
          marginBottom: "-120px",
          marginTop: "50px",
        }}
        container
        spacing={2}
      >
        <Grid item sx={{ width: "100%", margin: 0 }} xs={6}>
          <Card variant="outlined">
            <CardContent sx={{ padding: 0, height: "520px" }}>
              <div className="box">
                <img
                  className="img-zi-1"
                  width={"100%"}
                  src="./images/img-woman.svg"
                  alt=""
                />
                <div className=" text-box">
                  10 quick tips for cosmetics care
                </div>
                <a href="">
                  <button className="btn-box text-btn">See More</button>
                </a>
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sx={{ width: "100%", margin: 0 }} xs={6}>
          <Card variant="outlined">
            <CardContent sx={{ padding: 0, height: "520px" }}>
              <div className="box">
                <img
                  className="img-zi-1"
                  width={"100%"}
                  src="./images/img-oil.svg"
                  alt=""
                />
                <div className=" text-box-2">Get our latest products</div>
                <a href="">
                  <button className="btn-box-2 text-btn">See More</button>
                </a>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Container>
        <h2 className="title-popular">Browse popular categories</h2>
        <Grid
          sx={{
            alignContent: "center",
            justifyContent: "center",
            width: "1470px",
            height: "700px",
            marginLeft: "-200px",
            backgroundColor: "#ece3e3ab",
            marginTop: "-50px",
            paddingBottom: "100px",
          }}
          container
          spacing={3}
        >
          <Grid item textAlign={"center"} xs={1.7}>
            <Card sx={{ backgroundColor: "#ece3e3ab" }}>
              <CardContent>
                <img width={"100px"} src="./images/beauty.svg" />
              </CardContent>
              <div className="text-popular">Beauty</div>
            </Card>
          </Grid>
          <Grid item textAlign={"center"} xs={1.7}>
            <Card sx={{ backgroundColor: "#ece3e3ab" }}>
              <CardContent>
                <img height={"100px"} src="./images/wrincles.svg" />
              </CardContent>
              <div className="text-popular">Wrincles</div>
            </Card>
          </Grid>
          <Grid item textAlign={"center"} xs={1.7}>
            <Card sx={{ backgroundColor: "#ece3e3ab" }}>
              <CardContent>
                <img width={"100px"} src="./images/dayCare.svg" />
              </CardContent>
              <div className="text-popular">Day care</div>
            </Card>
          </Grid>
          <Grid item textAlign={"center"} xs={1.7}>
            <Card sx={{ backgroundColor: "#ece3e3ab" }}>
              <CardContent>
                <img width={"100px"} src="./images/nightCare.svg" />
              </CardContent>
              <div className="text-popular">Night care</div>
            </Card>
          </Grid>
          <Grid item textAlign={"center"} xs={1.7}>
            <Card sx={{ backgroundColor: "#ece3e3ab" }}>
              <CardContent>
                <img height={"100px"} src="./images/moisture.svg" />
              </CardContent>
              <div className="text-popular">Moisture</div>
            </Card>
          </Grid>
          <Grid item textAlign={"center"} xs={1.7}>
            <Card sx={{ backgroundColor: "#ece3e3ab" }}>
              <CardContent>
                <img height={"100px"} src="./images/protect.svg" />
              </CardContent>
              <div className="text-popular">Protect</div>
            </Card>
          </Grid>
        </Grid>
        <a href="#">
          <button className="btn-box-3 text-btn">See More</button>
        </a>
      </Container>
      <Container>
        <h1 className="h1-home-product">
          You deserve beautiful skin. <br />
          Browse and buy our newest products
        </h1>
        <HomeProductList />
      </Container>
      <Container className="subscribe-wrapper">
    
        <Grid container  sx={{ marginTop: "150px", marginBottom: "50px",  border: "1px solid goldenrod"  }} spacing={1}>
          <Grid item sx={{width: "100%", height: " 100%" ,}} xs={6}>
            <h1 className="h1-subscribe">Subscribe for special deals & offers</h1>
            
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              <input type="text"  className="input-text" placeholder="Your Name"/>
              <input type="email"  className="input-text" placeholder="Enter your Email here"/>
              </Box>
              <p className="p-subscribe">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              <button className="btn-subscribe">Subscribe</button>
           
          </Grid>
          <Grid item sx={{width: "100%" , height: "100%", marginTop: "-8px", marginBottom: "-7px"}} xs={6}>
            <img width={"100%"} src="./images/img-subscribe.svg" alt="" />
          </Grid>

        </Grid>
      </Container>
    </>
  );
};

export default Home;
