import { IconButtonProps } from "@mui/material";

export interface Opportunity {
  oppId?: number;
  oppName?: string;
  salesRepName?: string;
  amount?: number;
  product?: string;
  stage?: string;
  repProbability?: number;
  pilytixTier?: string;
  pilytixProbability?: number;
  probabilityHistory?: ProbabilityHistory[] | null;
  pilytixFactorsIncreasingWin?: PilytixFactorsCreasingWin[] | null;
  pilytixFactorsDecreasingWin?: PilytixFactorsCreasingWin[] | null;
}

export interface PilytixFactorsCreasingWin {
  name: string;
  message: string;
  weight: Weight;
}

export interface Weight {
  value: number;
  description: string;
}

export interface ProbabilityHistory {
  daysAgo: number;
  pilytixProb: number;
  repProb: number;
}

export interface ButtonProps {
  close?: boolean;
  back?: boolean;
}
export interface ExpandMoreProps extends IconButtonProps {
  expand?: boolean;
}
export interface CardContentProps {
  charts?: boolean;
}
export interface PaginationProps {
  start: number;
  limit: number;
  step: number;
}
export interface Pagination extends PaginationProps {
  next: () => void;
  prev: () => void;
}
