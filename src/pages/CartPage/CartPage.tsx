import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CartItem from '../../components/CartItem/CartItem';
import CartSummary from '../../components/CartSummary/CartSummary';
import { useCart } from '../../context/useCart';
import { useTranslation } from '../../i18n/useTranslation';
import './CartPage.css';

export default function CartPage() {
  const { items, totalPrice } = useCart();
  const { t } = useTranslation();
  const c = t('cart');

  return (
    <div className="container">
      <Header />

      <main>
        <h1 className="cart-page__title">{c.title}</h1>

        {items.length === 0 ? (
          <div className="cart-page__empty">{c.empty}</div>
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