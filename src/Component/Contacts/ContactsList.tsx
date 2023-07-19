import { Grid, Typography } from "@mui/material"
import ContactsListItem from "./ContactsListItem"
import ContactsArr from "../../utils/ContactsArr"


type Props = {}

const ContactsList = (props: Props) => {
    return (
        <>
            <Typography
                component="h2"
                variant="h3"
                align="center"
                sx={{
                    marginBottom: '30px',
                }}
            >
                <h2>
                    Contacts
                    <p className='link'><a  className='links' href="/">Home</a> <i className="arrow right"></i>  <a className='links' href="/contact">Contacts</a></p>

                    </h2>
            </Typography>
            <Grid container spacing={10}>
                {ContactsArr.map(
                    ({
                        id,
                        title,
                        location,
                        victoria,
                        country,
                        check,
                        image,
                    }) => (
                        <Grid item xs={5} sm={4} md={6}  key={id}>
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
        </>
    )
}
export default ContactsList
