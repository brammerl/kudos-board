import { useState } from "react";
import axios from "axios";

const useMutation = (url, method) => {
  const [response, setResponse] = useState();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const mutate = async (data) => {
    console.log(data);
    const options = {
      method,
      url,
      baseURL: import.meta.env.VITE_API_BASE_URL,
      data: {
        data: data,
      },
      headers: {
        accept: "application/json",
      },
    };

    try {
      const response = await axios(options);

      console.log(response.data);

      setResponse(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error);
    }
  };

  return {
    mutate,
    res: response,
    error,
    loading,
  };
};

export default useMutation;
