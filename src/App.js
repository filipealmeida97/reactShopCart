import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import { useState } from 'react';

function App() {

  const [cart, setCart] = useState(''); 
  const [vTotal, setVTotal] = useState(0); 

  const addCart = v => {
    setCart([...cart,v]);
    setVTotal(vTotal + v.price);
    console.log(vTotal);
  }

  return (
    <div className="App">
      <ProductList productSelect={addCart} title='Carrinho de compras usando React'/>
      <Cart items={cart} amount={vTotal}/>
    </div>
  );
}

export default App;
