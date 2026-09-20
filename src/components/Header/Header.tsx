import { Link } from 'react-router-dom';
import { useCart } from '../../context/useCart';
import { CartIcon, HeartIcon } from '../Icons/Icons';
import './Header.css';

export default function Header() {
    const { totalCount } = useCart();

    return (
        <header className="header">
            <Link to="/" className="header__logo" aria-label="На главную">
                QPICK
            </Link>

            <div className="header__icons">
                <Link to="/" className="header__icon" aria-label="Избранное">
                    <HeartIcon />
                    <span className="header__badge">2</span>
                </Link>

                <Link to="/cart" className="header__icon" aria-label="Корзина">
                    <CartIcon />
                    <span className="header__badge">{totalCount}</span>
                </Link>
            </div>
        </header>
    );
}