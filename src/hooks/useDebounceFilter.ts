import React, { useEffect, useState } from "react";
import { TokenType } from "../types/binance.types";

type DebounceFilterPropType = {
  data: any[];
  filterFunction: (eachData: any, textVal: string) => boolean;
};

const useDebounceFilter = ({
  data,
  filterFunction,
}: DebounceFilterPropType) => {
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState<any[]>(data);

  /**
   * update the filtered data based on data
   */
  useEffect(() => {
    setFilteredData([...data]);
  }, [data]);

  /**
   * sets debounce with timeout api and filters the given data
   */
  useEffect(() => {
    if (!search) {
      setFilteredData(data);
      return;
    }
    const id = setTimeout(() => {
      const settableData = data.filter((eachData) =>
        filterFunction(eachData, search)
      );
      setFilteredData(settableData);
    }, 400);

    return () => clearTimeout(id);
  }, [search]);

  return { search, setSearch, filteredData };
};

export default useDebounceFilter;
