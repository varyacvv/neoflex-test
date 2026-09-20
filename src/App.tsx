import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import { products } from './data/products';

export default function App() {
  const wired = products.filter(p => p.category === 'wired');

  return (
    <div className="container">
      <Header />

      <h2 style={{ fontSize: 18, fontWeight: 600, color: '#838383', margin: '22px 0' }}>
        Наушники
      </h2>
      <ProductList products={wired} />
    </div>
  );
}