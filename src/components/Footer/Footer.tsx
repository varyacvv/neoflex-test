import { Link } from 'react-router-dom';
import { useTranslation } from '../../i18n/useTranslation';
import {
    GlobeIcon,
    TelegramIcon,
    VkIcon,
    WhatsappIcon,
} from '../Icons/Icons';
import './Footer.css';

export default function Footer() {
    const { lang, setLang, t } = useTranslation();
    const f = t('footer');
    const l = t('lang');

    return (
        <footer className="footer">
            <div className="footer__grid">
                <div className="footer__logo">QPICK</div>

                <ul className="footer__links">
                    <li><Link to="/" className="footer__link">{f.favorites}</Link></li>
                    <li><Link to="/cart" className="footer__link">{f.cart}</Link></li>
                    <li><Link to="/" className="footer__link">{f.contacts}</Link></li>
                </ul>

                <div className="footer__col">
                    <Link to="/" className="footer__link">{f.terms}</Link>

                    <div className="footer__lang">
                        <GlobeIcon />
                        <button
                            type="button"
                            className={`lang ${lang === 'ru' ? 'lang--active' : 'lang--inactive'}`}
                            onClick={() => setLang('ru')}
                        >
                            {l.ru}
                        </button>
                        <button
                            type="button"
                            className={`lang ${lang === 'en' ? 'lang--active' : 'lang--inactive'}`}
                            onClick={() => setLang('en')}
                        >
                            {l.en}
                        </button>
                    </div>
                </div>

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