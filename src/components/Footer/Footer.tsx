import { Link } from 'react-router-dom';
import {
    GlobeIcon,
    TelegramIcon,
    VkIcon,
    WhatsappIcon,
} from '../Icons/Icons';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__grid">
                <div className="footer__logo">QPICK</div>

                {/* Ссылки */}
                <ul className="footer__links">
                    <li><Link to="/" className="footer__link">Избранное</Link></li>
                    <li><Link to="/cart" className="footer__link">Корзина</Link></li>
                    <li><Link to="/" className="footer__link">Контакты</Link></li>
                </ul>

                {/* Условия и языки */}
                <div className="footer__col">
                    <Link to="/" className="footer__link">Условия сервиса</Link>

                    <div className="footer__lang">
                        <GlobeIcon />
                        <span className="lang lang--active">Рус</span>
                        <span className="lang lang--inactive">Eng</span>
                    </div>
                </div>

                {/* Соцсети */}
                <div className="footer__social">
                    <a href="https://vk.com" target="_blank" rel="noopener noreferrer" aria-label="ВКонтакте">
                        <VkIcon />
                    </a>
                    <a href="https://t.me" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                        <TelegramIcon />
                    </a>
                    <a href="https://wa.me/70000000000" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                        <WhatsappIcon />
                    </a>
                </div>
            </div>
        </footer>
    );
}