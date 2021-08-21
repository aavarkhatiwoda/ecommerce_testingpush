import './App.scss';
import Home from './Pages/Home/Home.js';
import Eshopitems from './Pages/Eshopitems/Eshopitems.js';
import Cart from './Pages/Cart/Cart.js';
import Footer from './Pages/Footer/Footer.js';

function App() {
  return (
    <div className="app">

      <Home />
      <Eshopitems />
      <Cart />
      <Footer />

    </div>
  );
}

export default App;
