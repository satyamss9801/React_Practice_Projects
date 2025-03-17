import ProductTab from './components/ProductTab';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Product Display</h1>
      <div className="product-grid">
        <ProductTab productIndex={0} />
        <ProductTab productIndex={1} />
        <ProductTab productIndex={2} />
      </div>
    </div>
  )
}

export default App
