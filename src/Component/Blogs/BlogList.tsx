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
                    <p className='link'><a  className='links' href="/">Home</a> <i className="arrow right"></i>  <a className='links' href="/blog">Blog</a></p>

                    </h2>
            </Typography>
            <Grid container  columnSpacing={35}  spacing={2} style={{marginLeft:"-410px"}}>
                {BlogArr.map(
                    ({
                        id,
                        title,
                        time,
                        image,
                        author,
                    }) => (
                        <Grid item xs={5} sm={4} md={6}  key={id}>
                            <BlogListItem 
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
export default BlogList
