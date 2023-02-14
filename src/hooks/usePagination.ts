import { useState } from "react";
import { PaginationProps } from "../interfaces";

export const usePagination = ({ start, limit, step }: PaginationProps) => {
  const [pagination, setLimit] = useState({
    start,
    limit,
  });
// 10 - step , is maximum available minus the difference
  const next = () => {
    setLimit((prev) => ({
      start: Math.min(prev.start + step, 10-step),
      limit: Math.min(prev.limit + step, 10),
    }));
  };
  const prev = () => {
    setLimit((prev) => ({
      start: Math.max(prev.start - step, start),
      limit: Math.max(prev.limit - step, limit),
    }));
  };

  return {
    ...pagination,
    next,
    prev,
  };
};
