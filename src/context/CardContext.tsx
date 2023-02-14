import { useReducer } from "react";
import { cardReducer } from "./CardReducer";
import { CardProviderProps } from "./typeContext";
import { CardContextType } from "./typeContext";
import { createContext } from "react";
import opportunities from "../data/opportunities.json";

export const CardContext = createContext<CardContextType>({
  show: false,
  data: [],
  filtered: false,
  expanded: false,
  row: {},
  setShow: () => {},
  setRow: (value:number) => {},
  filterData: (filter: string) => [],
  setExpanded: (value: boolean) => {},
  resetData: () => [],
});

export const CardProvider = ({ children }: CardProviderProps) => {
  const [state, dispatch] = useReducer(cardReducer, {
    show: false,
    data: opportunities,
    row: {},
    filtered: false,
    expanded: false,
  });

  const setExpanded = (value: boolean) => {
    dispatch({ type: "SET_EXPANDED", payload: value });
  };

  const setShow = (value: boolean) => {
    dispatch({ type: "SET_SHOW", payload: value });
  };
  const setRow = (value: number) => {
    dispatch({ type: "SET_ROW", payload: value });
  };

  const filterData = (filterProduct: string = "") => {
    dispatch({ type: "FILTER_DATA", payload: filterProduct });
  };
  const resetData = () => {
    dispatch({ type: "RESET_DATA" });
  };
  const value = {
    setShow,
    setRow,
    setExpanded,
    filterData,
    resetData,
    row: state.row,
    show: state.show,
    filtered: state.filtered,
    data: state.data,
    expanded: state.expanded,
  };

  return (
    <CardContext.Provider value={value}> {children} </CardContext.Provider>
  );
};
