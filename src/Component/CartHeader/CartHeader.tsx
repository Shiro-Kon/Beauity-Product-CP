import CartProductList from "../CartProductList/CartProductList"


type Props = {
    productsInCart: {
        [id: number]: number
    }
}

const CartHeader = ({ productsInCart }: Props) => {
    return (
        <div>
            <CartProductList productsInCart={productsInCart} />
            
        </div>
    )
}

export default CartHeader
