import ProductsArr, { Product, getProductsObject } from "../../utils/ProductArr"

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
}

const CartTotal = ({
    productsInCart,
    productsObject = getProductsObject(ProductsArr),
}: Props) => {
    return (
        <div>
            Total: ${' '}
            {Object.keys(productsInCart).reduce(
                (total, productId) =>
                    total +
                    productsInCart[parseInt(productId)] *
                        productsObject[parseInt(productId)].price,
                0
            )}
        </div>
    )
}
export default CartTotal
