import {sym} from "enzyme/src/Utils";

export async function fetchStock({ setStockData, setLoading, setError, stockSymbol }){
  const API_KEY = '9M0U2R0U59ETQDXY';
  let StockSymbol = stockSymbol ? stockSymbol : 'VTI';
  let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;
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


export async function fetchForBatch({ setLoading, setError, setVOOStockData, setVTIStockData, setVTStockData, stockSymbol, setStockData}){
    console.log('here');
    const API_KEY = '9M0U2R0U59ETQDXY';
    let VOOStockData = "VOO";
    let VTIStockData = "VTI";
    let VTStockData = 'VT';
    let StockSymbol = stockSymbol ? stockSymbol : 'VTI';
    // let API_Call_VOO = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${VOOStockData}&outputsize=compact&apikey=${API_KEY}`;
    // let API_Call_VTI = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${VTIStockData}&outputsize=compact&apikey=${API_KEY}`;
    // let API_Call_VT = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${VTStockData}&outputsize=compact&apikey=${API_KEY}`;
    // let API_Call_Stock_Custom = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;

    let stockOneDetails = [];

    const fetchingNow =(thisSymbol, setFunction)=>{
        stockOneDetails.length=0;
        let API_Call_Variable = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${thisSymbol}&outputsize=compact&apikey=${API_KEY}`;
        fetch(API_Call_Variable)
            .then(
                function(res){
                    return res.json();
                }
            )
            .then (function(data){
                for (var key in data['Time Series (Daily)']){
                    stockOneDetails.push(data['Time Series (Daily)'][key]['1. open']);
                }
            })


            .then(setFunction(stockOneDetails))
            .then(setLoading(false))
            .catch((err)=>setError(err));
        }

    fetchingNow(VOOStockData, setVOOStockData);
    fetchingNow(VTIStockData, setVTIStockData);
    fetchingNow(VTStockData, setVTStockData);
    fetchingNow(StockSymbol, setStockData);
    }


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
