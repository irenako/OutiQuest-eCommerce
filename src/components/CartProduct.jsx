import Button from 'react-bootstrap/Button';
import { CartContext } from "../CardContext";
import { useContext } from "react";
import { getProductData } from "../productsStore";

function CartProduct(props) {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);

    return (
        <>
        
            <h3 >{productData.name}</h3>
            <p> {quantity} * {productData.price} = ${ (quantity * productData.price).toFixed(2) }</p>
            <Button className='text-white' variant="warning" size="sm" onClick={() => cart.deleteFromCart(id)}>Remove</Button>
            <hr></hr>
        
        </>
    )
}

export default CartProduct;