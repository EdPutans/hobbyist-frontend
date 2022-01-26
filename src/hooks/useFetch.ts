

import { useEffect, useState, useCallback } from 'react';

function fetchItems({ endpoint, method = "GET", body: bodyParam = null }: Props) {
  const body = !bodyParam ? undefined : JSON.stringify(bodyParam);

  return fetch(`http://localhost:6969/${endpoint}`, {
    headers: {
      "Content-Type": "application/json"
    },
    method: method ?? "GET",
    body
  })
    .then(r => r.json())
}

type Props = {
  endpoint: string;
  body?: BodyInit | null
  method?: 'GET' | 'POST' | 'PATCH' | 'DELETE';
}

type UseFetchReturn<I> = {
  item: I | null;
  fetch: () => void
}


function useFetch<I>({ endpoint, body, method }: Props): UseFetchReturn<I> {
  // item or items
  const [item, setItem] = useState<I | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetch = useCallback(() => {
    fetchItems({ endpoint, method, body })
      .then(r => setItem(r.data))
      .catch(e => setError(e.error))
  },
    [endpoint, method, body]);

  useEffect(() => {
    fetch();
  }, [])

  console.log('fetched', item);
  return {
    fetch,
    item
  }
};

export default useFetch;
