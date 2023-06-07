
import './App.css';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import MainPage from './components/MainPage/MainPage';
import Categories from './components/Categories/Categories';
import Subcat from './components/Subcategories/Subcat';
import { Provider } from 'react-redux';
import { store } from './redux';
import Products from './components/Products/Products';
import ProductInf from './components/ProductInf/ProductInf';
import Auth from './components/Auth/Auth';
import Registration from './components/Registration/Registration';
import Header from './components/Header/Header';
import About from './components/About/About';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Cart } from './components/Cart/Cart';
function App() {
  return (
    <div>
      
      <Provider store={store}>
      <BrowserRouter>

      <Header/>
      <Categories/>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route exact path='/subcat' element={<Subcat/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route exact path={`/products/:id`} element={<ProductInf/>}/>
          <Route exact path={`/login`} element={<Auth/>}/>
          <Route exact path={`/register`} element={<Registration/>}/>
          <Route exact path={`/about`} element={<About/>}/>
          <Route exact path={`/cart`} element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
      
      </Provider>
    </div>
  );
}

export default App;
