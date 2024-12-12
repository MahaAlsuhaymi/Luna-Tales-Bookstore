import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter,Routes,Route } from 'react-router-dom';

import Landing from './Components/Landing';
import Aboutus from './Components/Aboutus';
import Contactus from './Components/Contactus';
import List from './Components/List';
import Details from './Components/Details';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';


import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
          <div className="App">
          <BrowserRouter> 
            <Routes>

              <Route path='/' element={<Landing/>}/>
                <Route path='/aboutus' element={<Aboutus/>}/>
                <Route path='/contactus' element={<Contactus/>}/>
                <Route path='/list' element={<List/>}/>
                <Route path='/details' element={<Details/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/checkout' element={<Checkout/>}/>

            </Routes>
          </BrowserRouter>
    </div>  
    </Provider>
  
  );
}

export default App;
