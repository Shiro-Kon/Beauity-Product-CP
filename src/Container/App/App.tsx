import CssBaseline from "@mui/material/CssBaseline";
import { StyledEngineProvider } from "@mui/material/styles";
import { Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import Header from "../Header/Header";
import Products from "../../pages/Products/Products";
import Footer from "../Footer/Footer";
import Blog from "../../pages/Blog/Blog";
import Contacts from "../../pages/Contacts/Contacts";
import BlogDetailsPage from "../../Component/Blogs/BlogDetailsPage/BlogDetailsPage";
import HomePage from "../../pages/Home/HomePage";
import Basket from "../../pages/Basket/Basket";
import { createContext, useState } from "react";
import { omit } from "lodash";
import FavoritePage from "../../pages/Favorite/FavoritePage";
import CheckoutPage from "../../pages/Checkout/CheckoutPage";

type ProductsInCart = {
  [id: number]: number;
};

type Context = {
  removeProductFromCart: (id: number) => void;
  changeProductQuantity: (id: number, count: number) => void;
};

export const AppContext = createContext<Context | null>(null);

const App = () => {
  const [productsInCart, setProductsInCart] = useState<ProductsInCart>({});

  const addProductToCart = (id: number, count: number) => {
    setProductsInCart((prevState) => ({
      ...prevState,
      [id]: (prevState[id] || 0) + count,
    }));
  };

  const removeProductFromCart = (id: number) => {
    setProductsInCart((prevState) => omit(prevState, id));
  };

  const changeProductQuantity = (id: number, count: number) => {
    setProductsInCart((prevState) => ({
      ...prevState,
      [id]: count,
    }));
  };

  return (
    <StyledEngineProvider injectFirst>
      <AppContext.Provider
        value={{
          removeProductFromCart: removeProductFromCart,
          changeProductQuantity: changeProductQuantity,
        }}
      >
        <CssBaseline />
        <Header productsInCart={productsInCart} />

        <Container
          sx={{
            padding: "40px 0",
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/products"
              element={<Products addProductToCart={addProductToCart} />}
            />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:blogId" element={<BlogDetailsPage />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/favorite" element={<FavoritePage />} />
            <Route
              path="/basket"
              element={<Basket productsInCart={productsInCart} />}
            />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>
        </Container>
        <Footer />
      </AppContext.Provider>
    </StyledEngineProvider>
  );
};

export default App;
