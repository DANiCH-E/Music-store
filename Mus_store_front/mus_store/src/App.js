
import './App.css';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import MainPage from './components/MainPage/MainPage';
import Categories from './components/Categories/Categories';
import Subcat from './components/Subcategories/Subcat';
import { Provider } from 'react-redux';
import { store } from './redux';
import Products from './components/Products/Products';
import ProductInf from './components/ProductInf/ProductInf';
function App() {
  return (
    <div>
      <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/subcat' element={<Subcat/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route exact path={`/products/:id`} element={<ProductInf/>}></Route>
        </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
