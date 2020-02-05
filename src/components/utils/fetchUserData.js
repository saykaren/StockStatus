export async function fetchData({ setUserData, setLoading, setError }) {
  const res = await fetch(`http://jsonplaceholder.typicode.com/users`);
  res
    .json()
    .then((res) => setUserData(res))
    .then(setLoading(false))
    .catch((err) => setError(err));
}
export default fetchData;
