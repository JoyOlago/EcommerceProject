import { useState } from "react";
import DisplayProductList from "./ProductList";
import CartNoOfItems from   './CartNoOfItems'
const ShoppingCart =  () => {
    const [cartItems, setCartItems] = useState([]);
    const handleAddToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
    };
    const handleRemoveFromCart = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    };
}
  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} onRemove={handleRemoveFromCart} />
        ))}
      </div>
      {/* Display the total price */}
      <div className="total-price">
        Total: $
        {cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
      </div>
    </div>
  );


export default ShoppingCart;
