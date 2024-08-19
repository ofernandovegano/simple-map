export async function fetcher<TData>(
  input: RequestInfo | URL,
  init?: RequestInit
): Promise<TData | null> {
  const defaultHeaders = {
    'Content-Type': 'application/json;charset=UTF-8',
    ...init?.headers,
  };

  try {
    const res = await fetch(input, {
      ...init,
      headers: defaultHeaders,
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    const data = await res.json();
    return data as TData;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}
