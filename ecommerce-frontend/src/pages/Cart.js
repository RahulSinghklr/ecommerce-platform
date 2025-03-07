import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item._id} style={styles.cartItem}>
            <h2>{item.name}</h2>
            <p>${item.price}</p>
            <button onClick={() => dispatch(removeFromCart(item._id))}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}

const styles = {
  cartItem: {
    border: "1px solid #ddd",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "10px",
    boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
  },
};
