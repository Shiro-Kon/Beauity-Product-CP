import { Grid, Typography } from "@mui/material"
import BlogDetailsListItem from "./BlogDetailsListItem"
import BlogDetalsArr from "../../../utils/BlogDetailsArr"

type Props = {}

const BlogDetailsList = (props: Props) => {
    return (
        <>
            
            <Grid container  spacing={2} sx={{marginLeft: "1px"}}    >
                {BlogDetalsArr.map(
                    ({
                        id,
                        title,
                        time,
                        image,
                        author,
                    }) => (
                        <Grid  item   xs={3}  md={4}  key={id}>
                            <BlogDetailsListItem 
                                id={id}
                                title={title}
                                time={time}
                                image={image}
                                author={author}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
export default BlogDetailsList