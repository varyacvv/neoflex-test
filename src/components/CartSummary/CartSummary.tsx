import { formatPrice } from '../../utils/format';
import './CartSummary.css';

interface CartSummaryProps {
    total: number;
}

export default function CartSummary({ total }: CartSummaryProps) {
    return (
        <aside className="cart-summary">
            <div className="cart-summary__row">
                <span>ИТОГО</span>
                <span>{formatPrice(total)}</span>
            </div>

            <button type="button" className="cart-summary__btn">
                Перейти к оформлению
            </button>
        </aside>
    );
}