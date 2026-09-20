import { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ProductList from '../../components/ProductList/ProductList';
import ProductModal from '../../components/ProductModal/ProductModal';
import { products } from '../../data/products';
import type { Product } from '../../types/product';
import './HomePage.css';

export default function HomePage() {
    const [activeProduct, setActiveProduct] = useState<Product | null>(null);

    const wired = products.filter(p => p.category === 'wired');
    const wireless = products.filter(p => p.category === 'wireless');

    return (
        <div className="container">
            <Header />

            <main>
                <h2 className="category-title">Наушники</h2>
                <ProductList products={wired} onOpenProduct={setActiveProduct} />

                <h2 className="category-title">Беспроводные наушники</h2>
                <ProductList products={wireless} onOpenProduct={setActiveProduct} />
            </main>

            <Footer />

            <ProductModal
                product={activeProduct}
                onClose={() => setActiveProduct(null)}
            />
        </div>
    );
}