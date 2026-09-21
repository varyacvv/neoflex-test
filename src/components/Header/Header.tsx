import { Link } from 'react-router-dom';
import { useCart } from '../../context/useCart';
import { useTranslation } from '../../i18n/useTranslation';
import { CartIcon, HeartIcon } from '../Icons/Icons';
import './Header.css';

export default function Header() {
    const { totalCount } = useCart();
    const { t } = useTranslation();
    const h = t('header');

    return (
        <header className="header">
            <Link to="/" className="header__logo" aria-label="QPICK">
                QPICK
            </Link>

            <div className="header__icons">
                <Link to="/" className="header__icon" aria-label={h.favorites}>
                    <HeartIcon />
                    <span className="header__badge">2</span>
                </Link>

                <Link to="/cart" className="header__icon" aria-label={h.cart}>
                    <CartIcon />
                    <span className="header__badge">{totalCount}</span>
                </Link>
            </div>
        </header>
    );
}