import { useEffect, useState, useMemo } from "react";
import axios from "axios";

const useGetData = (url) => {
  const [data, setData] = useState();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const options = useMemo(() => {
    return {
      method: "GET",
      url,
      baseURL: import.meta.env.VITE_API_BASE_URL,
      headers: {
        accept: "application/json",
      },
    };
  }, [url]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);

        setData(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };

    fetchData();
  }, [options]);

  return {
    data,
    loading,
    error,
  };
};

export default useGetData;
