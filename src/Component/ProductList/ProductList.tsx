import { Grid, Typography } from '@mui/material'
import ProductListItem from './ProductListItem'
import ProductsArray from '../../utils/ProductArr'

type Props = {}

const ProductList = (props: Props) => {
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
                    Shop
                    <p className='link'><a  className='links' href="/">Home</a> <i className="arrow right"></i>  <a className='links' href="/products">Products</a></p>

                    </h2>
            </Typography>
            <Grid container spacing={4}>
                {ProductsArray.map(
                    ({
                        id,
                        title,
                        description,
                        type,
                        price,
                        image,
                        sup,
                    }) => (
                        <Grid item xs={12} sm={6} md={4} key={id}>
                            <ProductListItem
                                id={id}
                                title={title}
                                description={description}
                                type={type}
                                price={price}
                                image={image}
                                sup={sup}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}
export default ProductList
