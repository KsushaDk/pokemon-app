export const httpGet = (url: string) => {
  return fetch(url)
    .then((resp) => resp.json())
    .then((result) => result)
    .catch((error: any) => error);
};
