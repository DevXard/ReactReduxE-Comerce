import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ItemsList from './components/Items/ItemsList';
import NavBar from './components/navbar/NavBar';
import Product from './components/product/Product';
import ShopingCartPage from './components/shopingCart/ShopingCartPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch >
        <Route exact path="/" >
          <ItemsList />
        </Route>
        <Route exact path="/cart">
          <ShopingCartPage />
        </Route>
        <Route path="/:id">
          <Product />
        </Route>
        
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
