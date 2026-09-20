import type { Product } from '../../types/product';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css';

interface ProductListProps {
    products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
    return (
        <div className="product-list">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
}