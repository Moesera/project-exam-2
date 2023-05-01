import { useState, useEffect } from "react";

/**
 * GET method for api fetch.
 * @param {string} url endpoint
 * @returns an response from the API, with data, isLoading, isError.
 * @example
 * ```
 * // imports
 * import { useGet } from "path/hooks/service/get";
 * 
 * 
 * function App() {
 * const { data, isLoading, isError } = useGet(apiUrl);
 * 
 * if (isLoading) {
 *   return <div>Loading</div>;
 * }
 *
 * if (isError) {
 *   return <div>Error</div>;
 * }
 * 
 * return (
 * <>
 *   <Component Prop={data}
 * </>
 * )
 * 
 * }
 * ```
 */
export function useGet(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);

        const dataResults = await fetch(url);
        const json = await dataResults.json();

        setData(json);
      } catch (err) {
        console.log(err);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getData();
  }, [url]);

  if(data) {
    return { data, isLoading, isError };
  }
}


