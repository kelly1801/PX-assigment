import { CardAction, CardState } from "./typeContext";
import { Opportunity } from "../interfaces";
import opportunities from "../data/opportunities.json";

const filterData = (
  data: Opportunity[],
  filterProduct: string
): Opportunity[] => {
  const newData = data.filter((opportunity: Opportunity) =>
    opportunity?.product?.toLowerCase()?.includes(filterProduct.toLowerCase())
  );
  if (newData.length) {
    return newData;
  }
  return opportunities;
};

const setRow = (id: number): Opportunity => {
  return opportunities.find(
    (opportunity) => opportunity.oppId === id
  ) as Opportunity;
};

export const cardReducer = (
  state: CardState,
  action: CardAction
): CardState => {
  switch (action.type) {
    case "SET_SHOW":
      return { ...state, show: action.payload };
    case "SET_EXPANDED":
      return { ...state, expanded: action.payload };
    case "FILTER_DATA":
      return {
        ...state,
        filtered: true,
        data: filterData(state.data, action.payload)
      };
    case "SET_ROW":
      return {
        ...state,
        row: setRow(action.payload)
      };
    case "RESET_DATA":
      return {
        ...state,
        data: opportunities,
        filtered: false
      };
    default:
      return state;
  }
};
