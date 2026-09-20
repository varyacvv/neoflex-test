import type { Product } from '../../types/product';
import ProductCard from '../ProductCard/ProductCard';
import './ProductList.css';

interface ProductListProps {
    products: Product[];
    onOpenProduct?: (product: Product) => void;
}

export default function ProductList({ products, onOpenProduct }: ProductListProps) {
    return (
        <div className="product-list">
            {products.map(product => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onOpen={onOpenProduct}
                />
            ))}
        </div>
    );
}