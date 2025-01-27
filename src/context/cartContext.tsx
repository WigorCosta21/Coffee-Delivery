import { createContext, ReactNode, useEffect, useReducer } from "react";
import { CartItem, cartReducer } from "reducers/cartReducer";

interface CartContexType {
  cart: CartItem[];
  cartCount: number;
  cartTotal: number;
  clearCart: () => void;
  addItemToCart: (product: IProduct, quantity: number) => void;
  removeItemFromCart: (id: string) => void;
  updateItemQuantity: (
    productId: string,
    operation: "increment" | "decrement"
  ) => void;
}

interface CartProviderType {
  children: ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext({} as CartContexType);

const CART_STORAGE_KEY = "@coffee-delivery-1.0.0-w";

export const CartProvider = ({ children }: CartProviderType) => {
  const initializeCart = (): CartItem[] => {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY);
    return storedCart ? JSON.parse(storedCart) : [];
  };

  const [cart, dispatch] = useReducer(cartReducer, [], initializeCart);

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const cartTotal = cart.reduce((total, itemAtual) => {
    return (total += itemAtual.product.price * itemAtual.quantity);
  }, 0);

  const addItemToCart = (product: IProduct, quantity: number) => {
    dispatch({ type: "ADD_TO_CART", payload: { product, quantity } });
  };

  const removeItemFromCart = (productId: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: productId });
  };

  const updateItemQuantity = (
    productId: string,
    operation: "increment" | "decrement"
  ) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { productId, operation } });
  };

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount: cart.length,
        cartTotal,
        addItemToCart,
        removeItemFromCart,
        updateItemQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
