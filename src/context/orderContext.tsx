import { OrderFormData, orderSchema } from "@pages/Checkout/schema";
import { createContext, ReactNode, useReducer } from "react";
import { orderReducer } from "reducers/orderReducer";

interface OrderContextType {
  orderData: OrderFormData | null;
  setOrderData: (data: OrderFormData) => void;
  clearOrderData: () => void;
}

interface OrderProviderProps {
  children: ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const OrderContext = createContext({} as OrderContextType);

export const OrderProvider = ({ children }: OrderProviderProps) => {
  const [orderData, dispatch] = useReducer(orderReducer, null);

  const setOrderData = (data: OrderFormData) => {
    const validationResult = orderSchema.safeParse(data);

    if (validationResult.success) {
      dispatch({ type: "SET_ORDER_DATA", payload: data });
    } else {
      console.error("Invalid order data", validationResult.error);
      throw new Error("Invalid order data");
    }
  };

  const clearOrderData = () => dispatch({ type: "CLEAR_ORDER_DATA" });

  return (
    <OrderContext.Provider value={{ orderData, setOrderData, clearOrderData }}>
      {children}
    </OrderContext.Provider>
  );
};
