
import { useState, useEffect } from 'react';
export default function useFetch(url) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        let results;
        if (Array.isArray(url)) {
          const responses = await Promise.all(url.map((u) => fetch(u)));
          responses.forEach((res) => {
            if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
          });
          results = await Promise.all(responses.map((res) => res.json()));
        } else {
          const response = await fetch(url);
          if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
          results = await response.json();
        }
        setData(results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, loading };
}