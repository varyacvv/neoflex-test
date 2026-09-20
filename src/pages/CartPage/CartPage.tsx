import Header from '../../components/Header/Header';
import './CartPage.css';

export default function CartPage() {
  return (
    <div className="container">
      <Header />
      <h1 className="cart-page__title">Корзина</h1>
      <p style={{ color: '#838383' }}></p>
    </div>
  );
}