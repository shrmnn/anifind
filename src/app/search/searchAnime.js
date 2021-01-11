export default async function searchAnime(search) {
  const apiAddress = process.env.REACT_APP_API_ADDRESS;
  const queryString = `?q=${search}`;

  const data =
    (await fetch(`${apiAddress}${queryString}`)
      .then((r) => r.json())
      .then((r) => r.results)
      .catch((error) => {
        console.error(error);
        return [];
      })) || [];

  return data.slice(0, 5);
}
