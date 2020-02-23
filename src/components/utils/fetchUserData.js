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

export async function fetchStock({ setStockData, setLoading, setError, stockSymbol }){
  // const pointerToThis = this;
  // console.log({pointerToThis});
    console.log({stockSymbol});
  const API_KEY = '9M0U2R0U59ETQDXY';
  let TimeInterval = '60min';
  let StockSymbol = stockSymbol ? stockSymbol : 'VTI';
  let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
console.log({API_Call});


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

//         fetch(API_Call)
//         .then(
//             function(res){
//                 console.log(res);
//                 console.log(res.json);
//                 console.log(res.text);
//             }
//         )
//
// }

// Response {type: "cors", url: "https://www.alphavantage.co/query?function=TIME_SE…ol=VTI&outputsize=compact&apikey=9M0U2R0U59ETQDXY", redirected: false, status: 200, ok: true, …}
// type: "cors"
// url: "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=VTI&outputsize=compact&apikey=9M0U2R0U59ETQDXY"
// redirected: false
// status: 200
// ok: true
// statusText: "OK"
// headers: Headers {}
// body: (...)
// bodyUsed: false
// __proto__: Response

export default fetchData;
