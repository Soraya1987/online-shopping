import './App.css';
import { Switch,Route,Redirect } from 'react-router-dom';
//components
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/shared/Navbar';
import ShopCart from './components/ShopCart';

//Context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Navbar/>
        <Switch>
          <Route path="/products/:id" component={ProductDetails}/>
          <Route path="/products" component={Store}/>
          <Route path="/Cart" component={ShopCart}/>
          <Redirect to="/products"/>
        </Switch>
      </CartContextProvider>
      
    </ProductContextProvider>
  );
}

export default App;
