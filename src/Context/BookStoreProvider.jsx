import { useState } from "react";
import BookStoreContext from "./BookStoreContext";

const BookStoreProvider = ({ children }) => {
  const [cartInfo, setCartInfo] = useState([]);

  // Handle Add To Cart
  const addToCart = (item, qty) => {
    const newCartItem = {
      id: item.id,
      title: item.title,
      image: item.image,
      price: item.price,
      quantity: qty, 
      author: item.author,
    };
  
    const isExist = cartInfo.find((cart) => cart.id === newCartItem.id);
  
    if (isExist) {
      //update its quantity
      setCartInfo(
        cartInfo.map((cart) =>
          cart.id === newCartItem.id
            ? { ...cart, quantity: cart.quantity + qty } 
            : cart
        )
      );
    } else {
      setCartInfo((prev) => [...prev, newCartItem]);
    }
  };

  // Handle Remove From Cart
  const removeFromCart = (id) => {
    const cart = cartInfo.filter((c) => c.id !== id);
    setCartInfo(cart);
  };

  const cartInfoLength = cartInfo.reduce((total, item) => total + item.quantity, 0);

  return (
    <BookStoreContext.Provider
      value={{
        cartInfo,
        addToCart,
        removeFromCart,
        cartInfoLength,
      }}
    >
      {children}
    </BookStoreContext.Provider>
  );
};

export default BookStoreProvider;