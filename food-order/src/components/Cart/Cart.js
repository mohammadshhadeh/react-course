import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = !!cartCtx.items.length;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem(item);
    };

    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    // or use cartItemAddHandler.bind(null, item.id)
                    onRemove={() => cartItemRemoveHandler(item.id)}
                    // or use cartItemAddHandler.bind(null, item)
                    onAdd={() => cartItemAddHandler(item)}
                />
            ))}
        </ul>
    );

    return (
        <Modal onHideCart={props.onHideCart}>
            <div>
                {cartItems}
                <div className={classes.total}>
                    <span>Total Amount</span>
                    <span>{totalAmount}</span>
                </div>
                <div className={classes.actions}>
                    <button
                        className={classes["button--alt"]}
                        onClick={props.onHideCart}
                    >
                        Close
                    </button>
                    {hasItems && <button className={classes.button}>Order</button>}
                </div>
            </div>
        </Modal>
    );
};

export default Cart;
