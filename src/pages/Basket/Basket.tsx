import { Grid } from "@mui/material"
import CartProductList from "../../Component/CartProductList/CartProductList"
import CartTotal from "../../Component/CartTotal/CartTotal"
import CartProductListItemExtended from "../../Component/CartProductList/CartProductListItemExtended"

type Props = {
  productsInCart: {
      [id: number]: number
  }
}

const Basket = ({ productsInCart }: Props) => {
  return (
   <>
   <Grid container spacing={4}>
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                />
            </Grid>

            <CartTotal productsInCart={productsInCart} />
   </>
  )
}

export default Basket