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
   <Grid container spacing={4}>
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                />
            </Grid>

            <CartTotal  productsInCart={productsInCart} />
            
            <hr />
            <Typography align="center" sx={{marginTop: 10}}><BlogDetailsList/></Typography>

   </main>
  )
}

export default Basket