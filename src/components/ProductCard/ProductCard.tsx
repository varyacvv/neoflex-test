import type { Product } from '../../types/product';
import { useCart } from '../../context/useCart';
import { StarIcon } from '../Icons/Icons';
import { formatPrice } from '../../utils/format';
import './ProductCard.css';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    const { addToCart } = useCart();

    return (
        <article className="product-card">
            <img
                className="product-card__image"
                src={product.image}
                alt={product.title}
                loading="lazy"
            />

            <div className="product-card__row">
                <h3 className="product-card__title">{product.title}</h3>

                <div className="product-card__prices">
                    <span className="product-card__price">
                        {formatPrice(product.price)}
                    </span>
                    {product.oldPrice !== undefined && (
                        <span className="product-card__old-price">
                            {formatPrice(product.oldPrice)}
                        </span>
                    )}
                </div>
            </div>

            <div className="product-card__row product-card__row--bottom">
                <div className="product-card__rating">
                    <StarIcon />
                    <span>{product.rating}</span>
                </div>

                <button
                    type="button"
                    className="product-card__buy"
                    onClick={() => addToCart(product)}
                >
                    Купить
                </button>
            </div>
        </article>
    );
}