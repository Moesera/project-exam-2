import { useState } from "react";

function useLogin(url) {
  const [isSuccess, setIsSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

    async function login( email, password) {
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

        const data = res.json();
        const { token, ...user } = data;

        localStorage.setItem("token", token);
        localStorage.setItem("user", user);

        
      } catch (error) {
        setIsError(error, true);
        console.log(error);
      } finally {
        setIsLoading(false);
        setIsSuccess("Profile created", true);
      }
    }

    return { login, isSuccess, isLoading, isError };
}

export default useLogin;