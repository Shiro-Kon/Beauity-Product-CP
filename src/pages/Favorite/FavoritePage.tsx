import { Typography } from "@mui/material"
import CartSelectedList from "../../Component/CartSelected/CartSelectedList"
import CartSelectedListItemExtended from "../../Component/CartSelected/CartSelectedListItemExtended"
import { useAppSelector } from "../../redux/hooks"
import "./FavoritePage.scss"
import BlogDetailsList from "../../Component/Blogs/BlogDetailsPage/BLogDetailsList"

type Props = {}

const FavoritePage = (props: Props) => {

  const productsInFavorite = useAppSelector(
    (state) => state.productsInFavorite
  )
  return (
    <main>
                <Typography
                component="h2"
                variant="h3"
                align="center"
                sx={{
                    marginBottom: '30px',
                }}
            >
                <h2>
                    Favorite
                    <p className='link'><a  className='links' href="/">Home</a> <i className="arrow right"></i>  <a className='links' href="/favorite">Favorite</a></p>

                    </h2>
            </Typography>

            <div className="cartProductList">
                <div className="row-card-favorite">
                    <CartSelectedList
                        productsInFavorite={productsInFavorite}
                        FavoriteCardItem={CartSelectedListItemExtended}
                    />
                </div>
            </div>
            <hr />
            <Typography align="center" sx={{marginTop: 10}}><BlogDetailsList/></Typography>
    </main>
  )
}

export default FavoritePage