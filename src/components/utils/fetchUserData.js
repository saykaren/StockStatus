// import { sym } from 'enzyme/src/Utils';

export async function fetchStock({
  setStockData,
  setLoading,
  setError,
  stockSymbol,
}) {
  const API_KEY = '9M0U2R0U59ETQDXY';
  let StockSymbol = stockSymbol ? stockSymbol : 'VTI';
  let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
  fetch(API_Call)
    .then(function(res) {
      return res.json();
    })
    .then((res) => setStockData(res))
    .then(setLoading(false))
    .catch((err) => setError(err));
}

export async function fetchForBatch({
  setLoading,
  setError,
  setVOOStockData,
  setVTIStockData,
  setVTStockData,
  stockSymbol,
  setStockData,
  setLastRefreshedDate,
}) {
  const API_KEY = '9M0U2R0U59ETQDXY';
  let vooStockData = 'VOO';
  let vtiStockData = 'VTI';
  let vtStockData = 'VT';
  // let specialStockSymbol = stockSymbol ? stockSymbol : 'VTI';
  // let API_Call_VOO = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${vooStockData}&outputsize=compact&apikey=${API_KEY}`;
  // let API_Call_VTI = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${vtiStockData}&outputsize=compact&apikey=${API_KEY}`;
  // let API_Call_VT = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${vtStockData}&outputsize=compact&apikey=${API_KEY}`;
  // let API_Call_Stock_Custom = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${specialStockSymbol}&outputsize=compact&apikey=${API_KEY}`;

  // https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=VTI&outputsize=compact&apikey=9M0U2R0U59ETQDXY

  let stockVOODetails = [];
  let stockVTIDetails = [];
  let stockVTDetails = [];
  // let stockSpecialDetails = [];

  const fetchingNow = (thisSymbol, setFunction, stockArray) => {
    // stockOneDetails.length = 0;
    let API_Call_Variable = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${thisSymbol}&outputsize=compact&apikey=${API_KEY}`;
    fetch(API_Call_Variable)
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        for (var key in data['Time Series (Daily)']) {
          stockArray.push(data['Time Series (Daily)'][key]['1. open']);
        }
        setLastRefreshedDate(data['Meta Data']['3. Last Refreshed']);
      })

      .then(setFunction(stockArray))
      .then(setLoading(false))
      .catch((err) => setError(err) && (stockArray.length = 0));
  };
  fetchingNow(vtiStockData, setVTIStockData, stockVTIDetails);
  console.log({ stockVTIDetails });
  fetchingNow(vooStockData, setVOOStockData, stockVOODetails);
  console.log({ stockVOODetails });
  fetchingNow(vtStockData, setVTStockData, stockVTDetails);
  console.log({ stockVTDetails });
  // fetchingNow(specialStockSymbol, setStockData, stockSpecialDetails);
  // console.log({stockSpecialDetails});
}

export async function fetchingEachNow({
  thisSymbol,
  setFunction,
  setLoading,
  setError,
}) {
  const API_KEY = '9M0U2R0U59ETQDXY';
  let setLastRefreshedDate;
  let stockArray = [];
  // stockOneDetails.length = 0;
  let API_Call_Variable_2 = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${thisSymbol}&outputsize=compact&apikey=${API_KEY}`;
  fetch(API_Call_Variable_2)
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      for (var key in data['Time Series (Daily)']) {
        stockArray.push(data['Time Series (Daily)'][key]['1. open']);
      }
      setLastRefreshedDate(data['Meta Data']['3. Last Refreshed']);
    })

    .then(setFunction(stockArray))
    .then(setLoading(false))
    .catch((err) => setError(err) && (stockArray.length = 0));
}

//     fetch(API_Call_VTI)
//         .then(function (res) {
//             return res.json();
//         })
//         .then(function (data) {
//             for (var key in data['Time Series (Daily)']) {
//                 stockOneDetails.push(data['Time Series (Daily)'][key]['1. open']);
//             }
//             setLastRefreshedDate(data['Meta Data']['3. Last Refreshed']);
//         })
//
//         .then(setVTIStockData(stockOneDetails))
//         .then(setLoading(false))
//         .catch((err) => setError(err) && (stockOneDetails.length = 0));
//
//     fetch(API_Call_VOO)
//         .then(function (res) {
//             return res.json();
//         })
//         .then(function (data) {
//             for (var key in data['Time Series (Daily)']) {
//                 stockOneDetails.push(data['Time Series (Daily)'][key]['1. open']);
//             }
//         })
//
//         .then(setVOOStockData(stockOneDetails))
//         .then(setLoading(false))
//         .catch((err) => setError(err) && (stockOneDetails.length = 0));
// }
//  fetch(API_Call_VOO)
//      .then(
//          function(res){
//              return res.json();
//          }
//      )
//      .then (function(data){
//          for (var key in data['Time Series (Daily)']){
//              stockOneDetails.push(data['Time Series (Daily)'][key]['1. open']);
//          }
//      })
//
//
//      .then(setVOOStockData(stockOneDetails))
//      .then(setLoading(false))
//      .catch((err)=>setError(err));
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

export default fetchStock;
