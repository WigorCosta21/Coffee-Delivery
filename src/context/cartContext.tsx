import { createContext, ReactNode, useState } from "react";

interface CartItem {
  product: IProduct;
  cartItemsCount: number;
  totalItemPrice: number;
}

interface CartContexType {
  cart: CartItem[];
  cartCount: number;
  cartTotal: number;
  addItemToCart: (product: IProduct, quantity: number) => void;
  removeItemFromCart: (id: string) => void;
  updateItemQuantity: (
    productId: string,
    action: "increment" | "decrement"
  ) => void;
}

interface CartProviderType {
  children: ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext({} as CartContexType);

export const CartProvider = ({ children }: CartProviderType) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const cartTotal = cart.reduce((total, itemAtual) => {
    return (total += itemAtual.product.price * itemAtual.cartItemsCount);
  }, 0);

  const calculateItemTotal = (price: number, quantity: number) => {
    return price * quantity;
  };

  const addItemToCart = (product: IProduct, quantity: number) => {
    setCart((currentCart) => {
      const indexProduct = currentCart.findIndex(
        (item) => item.product.id === product.id
      );

      if (indexProduct !== -1) {
        return currentCart.map((item) =>
          item.product.id === product.id
            ? {
                ...item,
                cartItemsCount: item.cartItemsCount + quantity,
                totalItemPrice: calculateItemTotal(
                  product.price,
                  item.cartItemsCount + quantity
                ),
              }
            : item
        );
      }

      return [
        ...currentCart,
        {
          product,
          cartItemsCount: quantity,
          totalItemPrice: calculateItemTotal(product.price, quantity),
        },
      ];
    });
  };

  const removeItemFromCart = (id: string) => {
    const updatedCart = cart.filter((item) => item.product.id !== id);

    setCart(updatedCart);
  };

  const updateItemQuantity = (
    productId: string,
    action: "increment" | "decrement"
  ) => {
    setCart((currentCart) => {
      const updatedCart = currentCart.map((item) => {
        if (item.product.id !== productId) return item;

        const newQuantity =
          action === "increment"
            ? item.cartItemsCount + 1
            : Math.max(1, item.cartItemsCount - 1);

        return {
          ...item,
          cartItemsCount: newQuantity,
          totalItemPrice: calculateItemTotal(item.product.price, newQuantity),
        };
      });

      return updatedCart;
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount: cart.length,
        cartTotal,
        addItemToCart,
        removeItemFromCart,
        updateItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
