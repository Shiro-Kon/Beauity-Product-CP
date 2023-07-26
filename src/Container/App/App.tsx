import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { Route, Routes } from 'react-router-dom'
import { Container } from '@mui/material'
import Header from '../Header/Header'
import Products from '../../pages/Products/Products'
import Footer from '../Footer/Footer'
import Blog from '../../pages/Blog/Blog'
import Contacts from '../../pages/Contacts/Contacts'
import BlogDetailsPage from '../../Component/Blogs/BlogDetailsPage/BlogDetailsPage'
import HomePage from '../../pages/Home/HomePage'
import Basket from '../../pages/Basket/Basket'

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
                
                    <Route path="/" element={<HomePage />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:blogId" element={<BlogDetailsPage/>} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path='/basket' element={<Basket/>}/>
                </Routes>
            </Container>
            <Footer/>
        </StyledEngineProvider>
  )
}

export default App