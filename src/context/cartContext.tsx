import { createContext, ReactNode, useState } from "react";

interface CartItem {
  product: IProduct;
  cartItemsCount: number;
}

interface CartContexType {
  cart: CartItem[];
  cartCount: number;
  addItemToCart: (product: IProduct, quantity: number) => void;
  removeItemFromCart: (id: string) => void;
}

interface CartProviderType {
  children: ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext({} as CartContexType);

export const CartProvider = ({ children }: CartProviderType) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addItemToCart = (product: IProduct, quantity: number) => {
    const indexProduct = cart.findIndex(
      (item) => item.product.id === product.id
    );

    if (indexProduct !== -1) {
      const cartList = cart.map((item) =>
        item.product.id === product.id
          ? { ...item, cartItemsCount: item.cartItemsCount + quantity }
          : item
      );
      return setCart(cartList);
    }

    const newProduct = [...cart, { product, cartItemsCount: quantity }];

    setCart(newProduct);
  };

  const removeItemFromCart = (id: string) => {
    const updatedCart = cart.filter((item) => item.product.id !== id);

    setCart(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount: cart.length,
        addItemToCart,
        removeItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
