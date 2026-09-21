import { useTranslation } from '../../i18n/useTranslation';
import { formatPrice } from '../../utils/format';
import './CartSummary.css';

interface CartSummaryProps {
    total: number;
}

export default function CartSummary({ total }: CartSummaryProps) {
    const { t } = useTranslation();
    const c = t('cart');

    return (
        <aside className="cart-summary">
            <div className="cart-summary__row">
                <span>{c.total}</span>
                <span>{formatPrice(total)}</span>
            </div>

            <button type="button" className="cart-summary__btn">
                {c.checkout}
            </button>
        </aside>
    );
}