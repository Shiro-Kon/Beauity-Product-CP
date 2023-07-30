import { Grid, Typography } from "@mui/material"
import CartProductList from "../../Component/CartProductList/CartProductList"
import CartTotal from "../../Component/CartTotal/CartTotal"
import CartProductListItemExtended from "../../Component/CartProductList/CartProductListItemExtended"
import "./Basket.scss"
import BlogDetailsList from "../../Component/Blogs/BlogDetailsPage/BLogDetailsList"

type Props = {
  productsInCart: {
      [id: number]: number
  }
}

const Basket = ({ productsInCart }: Props) => {
  return (
   <main >
     <Typography
                component="h2"
                variant="h3"
                align="center"
                sx={{
                    marginBottom: '30px',
                }}
            >
                <h2>
                    Basket
                    <p className='link'><a  className='links' href="/">Home</a> <i className="arrow right"></i>  <a className='links' href="/basket">Basket</a></p>

                    </h2>
            </Typography>
   <Grid container spacing={4}>
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                />
            </Grid>
<Typography  component="h2"
                variant="h3"
                align="center"
                sx={{
                    marginBottom: '30px',
                }}> <CartTotal   productsInCart={productsInCart} /></Typography>
           
            
            <hr />
            <Typography align="center" sx={{marginTop: 10}}><BlogDetailsList/></Typography>

   </main>
  )
}

export default Basket