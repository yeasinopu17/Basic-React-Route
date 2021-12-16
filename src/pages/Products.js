import { Link } from 'react-router-dom';

const Products = (props) => {
    return (
        <section>
            <h1>The Product page</h1>
            <ul>
                <li>
                    <Link to="products/p1">A books</Link>
                </li>
                <li>
                    <Link to="products/p2">Js</Link>
                </li>
                <li>
                    <Link to="products/p3">React</Link>
                </li>
                <li>
                    <Link to="products/p3">Linux</Link>
                </li>
            </ul>
        </section>
    );
};
export default Products;
