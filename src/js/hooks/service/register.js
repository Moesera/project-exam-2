import { useState } from "react";

function useRegister(url) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  async function register(options) {
    try {
      setIsLoading(true);
      setIsError(false);
      setIsSuccess(false);

      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(options),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        // Handle bad HTTP response
        const data = await res.json();
        if (data.errors && data.errors.length > 0) {
          // Extract error message from response data
          const errorMessage = data.errors[0].message;
          throw new Error(errorMessage);
        } else {
          throw new Error(`Request failed with status code ${res.status}`);
        }
      }

      const data = res.json();
      setIsSuccess(true);
      return data;
    } catch (error) {
      setIsError(error.message);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return { register, isSuccess, isLoading, isError };
}

export default useRegister;
