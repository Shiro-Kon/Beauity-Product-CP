import {
  Avatar,
  Box,
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import ContactsListItem from "./ContactsListItem";
import ContactsArr from "../../utils/ContactsArr";
import { Link } from "react-router-dom";

type Props = {};

const ContactsList = (props: Props) => {
  return (
    <>
      <Typography
        component="h2"
        variant="h3"
        align="center"
        sx={{
          marginBottom: "30px",
        }}
      >
        <h2>
          Contacts
          <p className="link">
            <Link className="links" to={`/`}>
              Home
            </Link>
            <i className="arrow right"></i>
            <Link className="links" to={`/contacts`}>
              Contacts
            </Link>
          </p>
        </h2>
      </Typography>
      <Typography
        left={0}
        component="h3"
        variant="h3"
        align="left"
        sx={{ marginBottom: "30px" }}
      >
        <h3 className="h3-top">
          Feel free to contact us if you need some help or simply have a
          question to ask.
        </h3>
      </Typography>
      <Grid container spacing={10}>
        {ContactsArr.map(
          ({ id, title, location, victoria, country, check, image }) => (
            <Grid item xs={5} sm={4} md={6} key={id}>
              <ContactsListItem
                id={id}
                title={title}
                victoria={victoria}
                country={country}
                check={check}
                location={location}
                image={image}
              />
            </Grid>
          )
        )}
      </Grid>
      <Grid
        container
        sx={{ marginTop: "150px", marginBottom: "100px" }}
        spacing={2}
      >
        <Grid item xs={4}>
          <div className="meet-our-consultants">
            <h1 className="h1-meet">Meet our consultants</h1>
            <Grid
              container
              sx={{ marginTop: "30px" }}
              spacing={2}
              direction="column"
            >
              <Grid item xs={4} sx={{ marginBottom: "30px" }}>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <Avatar
                      alt="Remy Sharp"
                      src="./images/HeatherMilan.webp"
                      sx={{ width: 100, height: 100 }}
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <h3 className="consultant-h3">Heather Milan</h3>
                    <p>CEO, Consultant</p>
                    <p className="consultant-data">
                      <b>+61 (0) 3 8376 6284</b>
                    </p>
                    <p>
                      <b>noreply@envato.com</b>
                    </p>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={4}>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <Avatar
                      alt="Remy Sharp"
                      src="./images/Ashley Milan.webp"
                      sx={{ width: 100, height: 100 }}
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <h3 className="consultant-h3">Ashley Milan</h3>
                    <p>Co-founder, Consultant</p>
                    <p className="consultant-data">
                      <b>+61 (0) 3 8376 6284</b>
                    </p>
                    <p>
                      <b>noreply@envato.com</b>
                    </p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={8}>
          <div className="send-us-a-message">
            <h1 className="h1-message">Send us a message</h1>
            <p className="p-message">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam.
            </p>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              <TextField
                label="Name"
                id="outlined-start-adornment"
                sx={{ m: 2, width: "250px" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Phone"
                id="outlined-start-adornment"
                sx={{ m: 2, width: "447px" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"> +380 </InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Email"
                id="outlined-start-adornment"
                sx={{ m: 2, width: "70%" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Company"
                id="outlined-start-adornment"
                sx={{ m: 2, width: "164px" }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Message"
                id="outlined-start-adornment"
                fullWidth
                rows={4}
                multiline
                sx={{ m: 2 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start"></InputAdornment>
                  ),
                }}
              />

              <Button fullWidth sx={{ m: 2 }} variant="contained">
                Contatc us
              </Button>
            </Box>
          </div>
        </Grid>
      </Grid>
    </>
  );
};
export default ContactsList;
