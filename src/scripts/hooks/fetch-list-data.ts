import { useState, useEffect, useCallback } from 'react';

const useListDataFetch = (api: any, query?: { [key: string]: any }) => {
  const [pageSize, setPageSize] = useState(query?.pageSize || 10);
  const [isFetching, setFetching] = useState(false);
  const [isEmpty, setEmpty] = useState(false);
  const [listData, setListData] = useState([]);
  const [isError, setError] = useState(false);

  const getListData = useCallback(() => {
    (async () => {
      try {
        setFetching(true);
        const result = await api({
          pageNum: 1,
          pageSize,
          ...query,
        });
        setEmpty(!result || result.length === 0);
        setListData(result || []);
        setError(false);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setFetching(false);
      }
    })();
  }, [api, JSON.stringify(query)]);

  useEffect(() => {
    getListData();
  }, [JSON.stringify(query)]);

  // 提供给Pagination分页
  const getData = async (pageNum: number) => {
    let list;
    try {
      const result = await api({ pageNum, pageSize, ...query });
      setError(false);
      list = result || [];
      setEmpty(!result || result.length === 0);
      // setPageNo(result?.re?.pageNo || 1); // 以接口返回页面为准
    } catch (error) {
      setError(true);
    }

    setListData(list || []);
  };

  return [listData, isEmpty, isError, getData, isFetching];
};
export default useListDataFetch;
