import type { Product } from '../../types/product';
import Modal from '../Modal/Modal';
import { useCart } from '../../context/useCart';
import { useTranslation } from '../../i18n/useTranslation';
import { StarIcon } from '../Icons/Icons';
import { formatPrice } from '../../utils/format';
import './ProductModal.css';

interface ProductModalProps {
    product: Product | null;
    onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
    const { addToCart } = useCart();
    const { t } = useTranslation();
    const m = t('modal');
    const p = t('product');

    return (
        <Modal isOpen={product !== null} onClose={onClose}>
            {product && (
                <div className="product-modal">
                    <button
                        type="button"
                        className="product-modal__close"
                        onClick={onClose}
                        aria-label={m.close}
                    >
                        ✕
                    </button>

                    <img
                        className="product-modal__image"
                        src={product.image}
                        alt={product.title}
                    />

                    <div className="product-modal__body">
                        <h2 className="product-modal__title">{product.title}</h2>

                        <div className="product-modal__rating">
                            <StarIcon />
                            <span>{product.rating}</span>
                        </div>

                        <p className="product-modal__description">
                            {product.category === 'wired'
                                ? m.descriptionWired
                                : m.descriptionWireless}
                        </p>

                        <div className="product-modal__footer">
                            <div className="product-modal__prices">
                                <span className="product-modal__price">
                                    {formatPrice(product.price)}
                                </span>
                                {product.oldPrice !== undefined && (
                                    <span className="product-modal__old-price">
                                        {formatPrice(product.oldPrice)}
                                    </span>
                                )}
                            </div>

                            <button
                                type="button"
                                className="product-modal__buy"
                                onClick={() => {
                                    addToCart(product);
                                    onClose();
                                }}
                            >
                                {p.buy}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </Modal>
    );
}