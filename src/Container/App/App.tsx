import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { Route, Routes } from 'react-router-dom'
import { Container } from '@mui/material'
import Header from '../Header/Header'
import Homet from '../../pages/Home/Home'
import Home from '../../pages/Home/Home'
import Products from '../../pages/Products/Products'
import Footer from '../Footer/Footer'
import Blog from '../../pages/Blog/Blog'
import Contacts from '../../pages/Contacts/Contacts'

type Props = {}

const App = (props: Props) => {
  return (
    <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />
            <Container
                sx={{
                    padding: '40px 0',
                }}
            >
                
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>
            </Container>
            <Footer/>
        </StyledEngineProvider>
  )
}

export default App