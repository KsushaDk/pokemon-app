export const httpGet = (url: string) => {
  console.log(url);
  return fetch(url)
    .then((resp) => resp.json())
    .then((result) => result)
    .catch((error: any) => error);
};
