import { useState } from "react";

export const usePagination = () => {
  const [itemOffset, setItemOffset] = useState(0);
  return {
    itemOffset,
  };
};
