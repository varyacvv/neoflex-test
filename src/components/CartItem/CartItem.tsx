import type { CartItemType } from '../../types/product';
import { useCart } from '../../context/useCart';
import { useTranslation } from '../../i18n/useTranslation';
import { TrashIcon } from '../Icons/Icons';
import { formatPrice } from '../../utils/format';
import './CartItem.css';

interface CartItemProps {
    item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
    const { increment, decrement, removeFromCart } = useCart();
    const { t } = useTranslation();
    const c = t('cart');
    const { product, quantity } = item;

    return (
        <article className="cart-item">
            <img
                className="cart-item__image"
                src={product.image}
                alt={product.title}
                loading="lazy"
            />

            <div className="cart-item__info">
                <h3 className="cart-item__title">{product.title}</h3>
                <span className="cart-item__price">{formatPrice(product.price)}</span>
            </div>

            <button
                type="button"
                className="cart-item__remove"
                onClick={() => removeFromCart(product.id)}
                aria-label={c.remove}
            >
                <TrashIcon />
            </button>

            <div className="cart-item__bottom">
                <div className="cart-item__qty">
                    <button
                        type="button"
                        className="cart-item__qty-btn"
                        onClick={() => decrement(product.id)}
                        aria-label={c.decrease}
                    >
                        −
                    </button>
                    <span className="cart-item__qty-value">{quantity}</span>
                    <button
                        type="button"
                        className="cart-item__qty-btn"
                        onClick={() => increment(product.id)}
                        aria-label={c.increase}
                    >
                        +
                    </button>
                </div>

                <div className="cart-item__total">
                    {formatPrice(product.price * quantity)}
                </div>
            </div>
        </article>
    );
}