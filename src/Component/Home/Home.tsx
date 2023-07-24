import { Card, CardContent, Grid, Typography } from "@mui/material";
import "./Home.scss"

type Props = {};

const Home = (props: Props) => {
  return (
    <>
<div  className="slider-wrapper"> Slayder</div>
       
       <Grid sx={{ width: "1400px", height: "700px", marginLeft: '-130px' }} container spacing={2}>
        <Grid item sx={{width: '100%', margin: 0}}   xs={6} >
          <Card   variant="outlined" >
            <CardContent sx={{padding: 0, height: '520px'}} >
              <div className="box"><img  className="img-zi-1" width={'100%'} src="./images/img-woman.svg" alt="" />
              <div className=" text-box">10 quick tips for cosmetics care</div>
              <a href=""><button className="btn-box text-btn">See More</button></a></div>
              
            </CardContent>
            
          </Card>
        </Grid>
        <Grid item sx={{width: '100%', margin: 0}}   xs={6} >
          <Card   variant="outlined" >
            <CardContent sx={{padding: 0, height: '520px'}} >
              <div className="box"><img  className="img-zi-1" width={'100%'} src="./images/img-oil.svg" alt="" />
              <div className=" text-box-2">Get our latest products</div>
              <a href=""><button className="btn-box-2 text-btn">See More</button></a></div>
              
            </CardContent>
            
          </Card>
        </Grid>
       
      </Grid>
     
    </>
  );
};

export default Home;
