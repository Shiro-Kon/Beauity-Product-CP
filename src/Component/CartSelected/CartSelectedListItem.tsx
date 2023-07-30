import { Product } from "../../utils/ProductArr";

type Props = { product: Product; productCount: number }

const CartSelectedListItem = ({ product, productCount }: Props) => {
    return (
        <>
            {product.title}: {productCount}
        </>
    )
}

export default CartSelectedListItem