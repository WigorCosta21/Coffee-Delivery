import { createContext, ReactNode, useState } from "react";

interface CartItem {
  product: IProduct;
}

interface CartContexType {
  cart: CartItem[];
  addItemToCart: (product: IProduct) => void;
}

interface CartProviderType {
  children: ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext({} as CartContexType);

export const CartProvider = ({ children }: CartProviderType) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addItemToCart = (product: IProduct) => {
    const indexProduct = cart.findIndex(
      (item) => item.product.id === product.id
    );

    if (indexProduct !== -1) {
      const cartList = cart.map((item) =>
        item.product.id === product.id ? { ...item } : item
      );
      return setCart(cartList);
    }

    const newProduct = {
      ...cart,
      product,
    };

    setCart([...cart, newProduct]);
  };
  console.log(cart);

  return (
    <CartContext.Provider value={{ cart, addItemToCart }}>
      {children}
    </CartContext.Provider>
  );
};
