import logo from './logo.svg';
import './App.css';
import Navi from './Navi';
import Category from './Category';
import Product from './Product';

function App() {
  return (
    <div className="App">
      <Navi />
      <div className='row'>
      <Category />
      <Product />
      </div>
    </div>
  );
}

export default App;
