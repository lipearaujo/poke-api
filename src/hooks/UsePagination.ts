import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from 'react-router-dom';

const UsePagination = () => {
  const getActualPage = () => {
    const pageParam = searchParams.get("page");
    const pageNumber = pageParam ? parseInt(pageParam, 10) : 1;
    return isNaN(pageNumber) ? 1 : pageNumber;
  };

  const [searchParams, setSearchParams] = useSearchParams();
  const [actualPage, setActualPage] = useState(getActualPage());

  useEffect(() => {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("page", actualPage.toString());
    setSearchParams(newParams);
  }, [actualPage])

  return {actualPage, setActualPage}
};

export default UsePagination;
