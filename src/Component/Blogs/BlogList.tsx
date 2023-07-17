import { Grid, Typography } from '@mui/material'
import BlogListItem from './BlogListItem'
import BlogArr from '../../utils/BlogArr'

type Props = {}

const BlogList = (props: Props) => {
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
                    Blog
                    <p className='link'><a  className='links' href="/">Home</a> <i className="arrow right"></i>  <a className='links' href="/blog">Products</a></p>

                    </h2>
            </Typography>
            <Grid container spacing={4}>
                {BlogArr.map(
                    ({
                        id,
                        title,
                        time,
                        image,
                    }) => (
                        <Grid item xs={12} sm={2} md={6} key={id}>
                            <BlogListItem
                                id={id}
                                title={title}
                                time={time}
                                image={image}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
export default BlogList
