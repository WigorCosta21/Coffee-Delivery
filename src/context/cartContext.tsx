import { createContext, ReactNode, useState } from "react";

interface CartItem {
  product: IProduct;
  cartItemsCount: number;
}

interface CartContexType {
  cart: CartItem[];
  cartCount: number;
  addItemToCart: (product: IProduct, quantity: number) => void;
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

  console.log(cart);

  return (
    <CartContext.Provider
      value={{ cart, cartCount: cart.length, addItemToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
