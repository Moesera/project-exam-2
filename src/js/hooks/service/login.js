import { useState } from "react";

function useLogin(url) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  async function login(email, password) {
    try {
      setIsLoading(true);
      setIsError(false);
      setIsSuccess(false);

      const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ email, password }),
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

      const data = await res.json();
  
      const { accessToken, ...user } = data;
  
      localStorage.setItem("token", JSON.stringify(accessToken));
      localStorage.setItem("user", JSON.stringify(user));

      if(res.ok) {
        setIsSuccess(true);
      }
    } catch (error) {
      setIsError(error.message);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return { login, isSuccess, isLoading, isError };
}

export default useLogin;
