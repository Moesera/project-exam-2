import { useState } from "react";
import { getItem } from "../../localStorage/getItem";

export function useApi(url) {
  const [data, setData] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const token = getItem("token");

  async function apiData(body, method) {
    const options = {
      method: method,
      body: JSON.stringify(body),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    try {
      setIsLoading(true);
      setIsError(false);
      setIsSuccess(false);
      let dataResults;

      dataResults = await fetch(url, options);

      if (!dataResults.ok) {
        // Handle bad HTTP response
        const data = await dataResults.json();
        if (data.errors && data.errors.length > 0) {
          // Extract error message from response data
          const errorMessage = data.errors[0].message;
          throw new Error(errorMessage);
        } else {
          throw new Error(`Request failed with status code ${dataResults.status}`);
        }
      }

      console.log(dataResults);
      const json = await dataResults.json();

      setData(json);
      if (dataResults.ok) {
        setIsSuccess(true);
      }
    } catch (error) {
      console.log(error);
      setIsError(error.errorMessage);
    } finally {
      setIsLoading(false);
    }
  }

  if (data) {
    return { apiData, isSuccess, isLoading, isError };
  }
}
