export async function fetchData({ setUserData, setLoading, setError }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  res
    .json()
    .then((res) => setUserData(res))
    .then(setLoading(false))
    .catch((err) => setError(err));
}

// export async function fetchDataSecond({ setUserData, setLoading, setError }) {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
//   res
//       .json()
//       .then((res) => setUserData(res))
//       .then(setLoading(false))
//       .catch((err) => setError(err));
// }
// export default fetchData;

export async function fetchStock({ setStockData, setLoading, setError }){
  const pointerToThis = this;
  const API_KEY = '9M0U2R0U59ETQDXY';
  let TimeInterval = '60min';
  let StockSymbol = 'VTI';
  let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${StockSymbol}&outputsize=full&apikey=${API_KEY}`;

  https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=%27VTI%27&interval=%2760min%27outputsize=compact&apikey=%279M0U2R0U59ETQDXY%27;
//https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&outputsize=full&apikey=9M0U2R0U59ETQDXY
  fetch(API_Call)
      .then(
          function(res){
            return res.json();
          }
      )
      .then((res)=>setStockData(res))
      .then(setLoading(false))
      .catch((err)=>setError(err));
}


export default fetchData;
