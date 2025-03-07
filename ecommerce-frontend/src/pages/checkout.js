import { useSelector } from "react-redux";
import axios from "axios";

export default function Checkout() {
  const cart = useSelector((state) => state.cart);

  const handleCheckout = async () => {
    try {
      const { _ } = await axios.post("http://localhost:5000/api/orders", {
        items: cart,
      });
      alert("Order placed successfully!");
    } catch (error) {
      console.error("Checkout error:", error);
    }
  };

  return (
    <div>
      <h1>Checkout</h1>
      <button onClick={handleCheckout}>Place Order</button>
    </div>
  );
}
