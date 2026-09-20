import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ProductList from '../../components/ProductList/ProductList';
import { products } from '../../data/products';
import './HomePage.css';

export default function HomePage() {
    const wired = products.filter(p => p.category === 'wired');
    const wireless = products.filter(p => p.category === 'wireless');

    return (
        <div className="container">
            <Header />

            <main>
                <h2 className="category-title">Наушники</h2>
                <ProductList products={wired} />

                <h2 className="category-title">Беспроводные наушники</h2>
                <ProductList products={wireless} />
            </main>

            <Footer />
        </div>
    );
}