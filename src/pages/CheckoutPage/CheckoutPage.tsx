import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useCart } from '../../context/useCart';
import { useTranslation } from '../../i18n/useTranslation';
import { formatPrice } from '../../utils/format';
import './CheckoutPage.css';

type PaymentMethod = 'card' | 'cash';

interface FormValues {
    name: string;
    phone: string;
    email: string;
    address: string;
    payment: PaymentMethod;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
    name: '',
    phone: '',
    email: '',
    address: '',
    payment: 'card',
};

export default function CheckoutPage() {
    const { items, totalPrice, clearCart } = useCart();
    const { t } = useTranslation();
    const c = t('checkout');
    const cart = t('cart');

    const [values, setValues] = useState<FormValues>(initialValues);
    const [errors, setErrors] = useState<FormErrors>({});
    const [success, setSuccess] = useState(false);

    const setField = <K extends keyof FormValues>(key: K, value: FormValues[K]) => {
        setValues(prev => ({ ...prev, [key]: value }));
        setErrors(prev => ({ ...prev, [key]: undefined }));
    };

    const validate = (): FormErrors => {
        const next: FormErrors = {};
        if (!values.name.trim()) next.name = c.required;
        if (!values.phone.trim()) next.phone = c.required;
        else if (!/^\+?[\d\s-]{10,}$/.test(values.phone)) next.phone = c.invalidPhone;
        if (!values.email.trim()) next.email = c.required;
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = c.invalidEmail;
        if (!values.address.trim()) next.address = c.required;
        return next;
    };

    const submitOrder = () => {
        const next = validate();
        if (Object.keys(next).length > 0) {
            setErrors(next);
            return;
        }
        clearCart();
        setSuccess(true);
    };

    const handleFormSubmit = (e: FormEvent) => {
        e.preventDefault();
        submitOrder();
    };

    // Экран успеха
    if (success) {
        return (
            <div className="container">
                <Header />
                <main className="checkout-page">
                    <div className="checkout-page__success">
                        <div className="checkout-page__success-icon">✓</div>
                        <h1>{c.success}</h1>
                        <Link to="/" className="checkout-page__back">{c.backHome}</Link>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    // Пустая корзина 
    if (items.length === 0) {
        return (
            <div className="container">
                <Header />
                <main className="checkout-page">
                    <h1 className="checkout-page__title">{c.title}</h1>
                    <div className="checkout-page__empty">
                        {cart.empty}
                        <div>
                            <Link to="/" className="checkout-page__back">{c.backHome}</Link>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    // Форма
    return (
        <div className="container">
            <Header />

            <main className="checkout-page">
                <h1 className="checkout-page__title">{c.title}</h1>

                <div className="checkout-page__layout">
                    <form className="checkout-form" onSubmit={handleFormSubmit} noValidate>
                        <label className="checkout-form__field">
                            <span>{c.name}</span>
                            <input
                                type="text"
                                value={values.name}
                                onChange={e => setField('name', e.target.value)}
                                className={errors.name ? 'is-error' : ''}
                            />
                            {errors.name && <small className="checkout-form__error">{errors.name}</small>}
                        </label>

                        <label className="checkout-form__field">
                            <span>{c.phone}</span>
                            <input
                                type="tel"
                                value={values.phone}
                                onChange={e => setField('phone', e.target.value)}
                                placeholder="+7 999 123-45-67"
                                className={errors.phone ? 'is-error' : ''}
                            />
                            {errors.phone && <small className="checkout-form__error">{errors.phone}</small>}
                        </label>

                        <label className="checkout-form__field">
                            <span>{c.email}</span>
                            <input
                                type="email"
                                value={values.email}
                                onChange={e => setField('email', e.target.value)}
                                placeholder="example@mail.com"
                                className={errors.email ? 'is-error' : ''}
                            />
                            {errors.email && <small className="checkout-form__error">{errors.email}</small>}
                        </label>

                        <label className="checkout-form__field">
                            <span>{c.address}</span>
                            <input
                                type="text"
                                value={values.address}
                                onChange={e => setField('address', e.target.value)}
                                className={errors.address ? 'is-error' : ''}
                            />
                            {errors.address && <small className="checkout-form__error">{errors.address}</small>}
                        </label>

                        <fieldset className="checkout-form__payment">
                            <legend>{c.payment}</legend>

                            <label className="checkout-form__radio">
                                <input
                                    type="radio"
                                    name="payment"
                                    value="card"
                                    checked={values.payment === 'card'}
                                    onChange={() => setField('payment', 'card')}
                                />
                                <span>{c.card}</span>
                            </label>

                            <label className="checkout-form__radio">
                                <input
                                    type="radio"
                                    name="payment"
                                    value="cash"
                                    checked={values.payment === 'cash'}
                                    onChange={() => setField('payment', 'cash')}
                                />
                                <span>{c.cash}</span>
                            </label>
                        </fieldset>
                    </form>

                    <aside className="checkout-summary">
                        <div className="checkout-summary__row">
                            <span>{cart.total}</span>
                            <span>{formatPrice(totalPrice)}</span>
                        </div>

                        <button
                            type="button"
                            className="checkout-summary__btn"
                            onClick={submitOrder}
                        >
                            {c.submit}
                        </button>
                    </aside>
                </div>
            </main>

            <Footer />
        </div>
    );
}