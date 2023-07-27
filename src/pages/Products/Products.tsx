import ProductList from "../../Component/ProductList/ProductList"
import './Products.scss'
type Props = {
  addProductToCart: (id: number, count: number) => void
}

const Products = ({ addProductToCart }: Props) => {
  return (
    <main>
      <ProductList addProductToCart={addProductToCart} />
    </main>
  )
}

export default Products








