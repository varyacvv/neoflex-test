import Header from '../../components/Header/Header';
import CartItem from '../../components/CartItem/CartItem';
import { useCart } from '../../context/useCart';
import './CartPage.css';

export default function CartPage() {
  const { items } = useCart();

  return (
    <div className="container">
      <Header />
      <h1 className="cart-page__title">Корзина</h1>

      {items.length === 0 ? (
        <p style={{ color: '#838383' }}>В корзине пока нет товаров</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          {items.map(item => (
            <CartItem key={item.product.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}