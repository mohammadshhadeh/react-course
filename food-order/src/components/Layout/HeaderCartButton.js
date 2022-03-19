import { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;
    const [btnIsHighLighted, setBtnIsHighLighted] = useState(false);

    const numberOfCartItems = items.reduce(
        (prevValue, item) => prevValue + item.amount, 0
    );

    const btnClasses = `${classes.button} ${btnIsHighLighted ? classes.bump : ''}`
    useEffect(() => {
        if (items.length) {
            setBtnIsHighLighted(true);
            const timer = setTimeout(() => {
                setBtnIsHighLighted(false)
            }, 300)

            return () => {
                clearTimeout(timer);
            }
        }
    }, [items])

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;
