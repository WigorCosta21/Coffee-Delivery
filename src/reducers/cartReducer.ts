type CartAction =
  | { type: "ADD_TO_CART"; payload: { product: IProduct; quantity: number } }
  | { type: "REMOVE_ITEM"; payload: string }
  | {
      type: "UPDATE_QUANTITY";
      payload: { productId: string; operation: "increment" | "decrement" };
    }
  | { type: "CLEAR_CART" };

export interface CartItem {
  product: IProduct;
  quantity: number;
  totalItemPrice: number;
}

export const cartReducer = (state: CartItem[], action: CartAction) => {
  const calculateItemTotal = (price: number, quantity: number) => {
    return price * quantity;
  };

  switch (action.type) {
    case "ADD_TO_CART": {
      const { product, quantity } = action.payload;

      const itemIndex = state.findIndex(
        (item) => item.product.id === product.id
      );

      if (itemIndex > -1) {
        const updatedCartItems = [...state];
        const existingCartItem = updatedCartItems[itemIndex];

        updatedCartItems[itemIndex] = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + quantity,
          totalItemPrice: calculateItemTotal(
            product.price,
            existingCartItem.quantity + quantity
          ),
        };

        return updatedCartItems;
      } else {
        return [
          ...state,
          {
            product,
            quantity,
            totalItemPrice: calculateItemTotal(product.price, quantity),
          },
        ];
      }
    }

    case "REMOVE_ITEM": {
      return state.filter((item) => item.product.id !== action.payload);
    }

    case "UPDATE_QUANTITY": {
      const { productId, operation } = action.payload;

      return state.map((item) => {
        if (item.product.id !== productId) return item;

        const newQuantity =
          operation === "increment"
            ? item.quantity + 1
            : Math.max(1, item.quantity - 1);

        return {
          ...item,
          quantity: newQuantity,
          totalItemPrice: calculateItemTotal(item.product.price, newQuantity),
        };
      });
    }
    case "CLEAR_CART": {
      return [];
    }
    default: {
      return state;
    }
  }
};
