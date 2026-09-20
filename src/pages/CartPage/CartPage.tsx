import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CartItem from '../../components/CartItem/CartItem';
import CartSummary from '../../components/CartSummary/CartSummary';
import { useCart } from '../../context/useCart';
import './CartPage.css';

export default function CartPage() {
  const { items, totalPrice } = useCart();

  return (
    <div className="container">
      <Header />

      <main>
        <h1 className="cart-page__title">Корзина</h1>

        {items.length === 0 ? (
          <div className="cart-page__empty">В корзине пока нет товаров</div>
        ) : (
          <div className="cart-page__layout">
            <div className="cart-page__items">
              {items.map(item => (
                <CartItem key={item.product.id} item={item} />
              ))}
            </div>

            <CartSummary total={totalPrice} />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}