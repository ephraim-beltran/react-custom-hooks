import { useEffect, useState } from "react";
export function useFetch(url, headers, handleErrorCode = handleError) {
  const controller = new AbortController();

  const [status, setStatus] = useState("idle");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchData(url) {
      setStatus("loading");
      try {
        const res = await fetch(url, {
          ...headers,
          signal: controller.signal,
        });
        if (!res.ok) handleErrorCode(res.status);

        const data = await res.json();
        setData(data);
        setStatus("success");
      } catch (error) {
        setStatus("error");
        setError(error);
        console.error(error);
      }
    }
    fetchData(url);
    return () => controller.abort();
  }, [url]);

  return [data, status, error];
}

function handleError(code) {
  switch (code) {
    case 400:
      throw new Error("Bad Request");
    case 401:
      throw new Error("Request is unauthorized");
    case 403:
      throw new Error("Request has been denied");
    case 404:
      throw new Error("Requested data not found");
    case 405:
      throw new Error("Method Not Allowed");
    case 406:
      throw new Error("Not Acceptable");
    case 408:
      throw new Error("Request Timedout");
    default:
      throw new Error("There's been an error while retrieving data");
  }
}
