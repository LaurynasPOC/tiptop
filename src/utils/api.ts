const API_URL = 'https://sfjtzvvdks.tiptop.io/';

export const post = async (path: string, body: Record<string, unknown> | null): Promise<any> => {
  const result = await fetch(`${API_URL}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : '',
  })
    .then(resp => resp.json())
    .catch(err => console.log(path, 'error', err));
  return result;
};

export const getMedium = () =>
  fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@tiptop_io').then(
    resp => resp.json(),
  );
