import { useContext } from "react";
import { OrderContext } from "context/orderContext";

export const useOrder = () => {
  const context = useContext(OrderContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};
