import { Product } from '../../utils/ProductArr'

type Props = { product: Product; productCount: number }

const CartProductListItem = ({ product, productCount }: Props) => {
    return (
        <div>
            {productCount}
        </div>
    )
}
export default CartProductListItem
