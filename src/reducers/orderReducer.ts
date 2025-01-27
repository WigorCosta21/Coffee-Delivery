import { OrderFormData } from "@pages/Checkout/schema";

type OrderAction =
  | { type: "SET_ORDER_DATA"; payload: OrderFormData }
  | { type: "CLEAR_ORDER_DATA" };

export const orderReducer = (
  state: OrderFormData | null,
  action: OrderAction
) => {
  switch (action.type) {
    case "SET_ORDER_DATA": {
      return action.payload;
    }
    case "CLEAR_ORDER_DATA": {
      return null;
    }

    default: {
      return state;
    }
  }
};
