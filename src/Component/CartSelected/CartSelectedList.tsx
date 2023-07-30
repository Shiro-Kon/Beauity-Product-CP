import ProductsArr, { Product, getProductsObject } from "../../utils/ProductArr"
import CartSelectedListItem from "./CartSelectedListItem"

type Props = {
    productsInFavorite: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
    FavoriteCardItem?: any
}

const CartSelectedList = ({
    productsInFavorite,
    productsObject = getProductsObject(ProductsArr),
    FavoriteCardItem = CartSelectedListItem,
}: Props) => {
    return (
        <>
            {Object.keys(productsInFavorite).map((productId) => (
                <div className="col-3 product-card">
                    <div className="card-content" key={productId}>
                        <FavoriteCardItem
                            key={productId}
                            product={productsObject[parseInt(productId)]}
                            productCount={
                                productsInFavorite[parseInt(productId)]
                            }
                        />
                    </div>
                </div>
            ))}
        </>
    )
}

export default CartSelectedList