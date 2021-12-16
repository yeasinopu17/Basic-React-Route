// import classes from './ProductDetails.module.css';
import { useParams } from 'react-router-dom';

const ProductDetails = (props) => {
    const params = useParams();


    return (
        <section>
            <h1>Product Details</h1>
            <p>{params.productId}</p>
        </section>
    );
};
export default ProductDetails;
