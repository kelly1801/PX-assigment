import { ReactNode } from "react";
import { Opportunity } from "../interfaces";

export type CardAction =
  | { type: "SET_SHOW"; payload: boolean }
  | { type: "SET_EXPANDED"; payload: boolean }
  | { type: "FILTER_DATA"; payload: string }
  | { type: "RESET_DATA" }
  | { type: "SET_ROW" , payload: number};

export interface CardContextType {
  show: boolean;
  data: Opportunity[];
  row: Opportunity;
  filtered: boolean;
  expanded: boolean;
  setShow: (value: boolean) => void;
  setRow: (value: number) => void;
  setExpanded: (value: boolean) => void;
  filterData: (filter: string) => void;
  resetData: () => void;
}

export interface CardState {
  show: boolean;
  data: Opportunity[];
  row: Opportunity;
  filtered: boolean;
  expanded: boolean;
}

export interface CardProviderProps {
  children: ReactNode;
}
