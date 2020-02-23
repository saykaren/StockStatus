import React, { useState, useEffect } from 'react';
import './../styling/App.scss';
import { fetchData, fetchStock } from './../utils/fetchUserData';
import Card from './Card';
import {
  userJsonPlaceHolder,
  dataProps,
} from './../../interface/DataRecipient';
import './../styling/Card.scss';

const timeSeries = 'Time Series (Daily)';
const openPriceString: string = "1. open";
const highPriceString: string = "2. high";

const App = () => {
  const [userData, setUserData] = useState<userJsonPlaceHolder>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [memberData, setMemberData] = useState<dataProps | undefined>();
  const [modal, setModal] = useState({ active: false, dataID: 1 });

  const [stockData, setStockData] = useState();
  const [dailyStock, setDailyStock] = useState();

  const [dateStocks, setDateStocks] = useState();
  const [stockOpenPrice, setStockOpenPrice] = useState();
  const [stockSymbol, setStockSymbol] = useState('VTI');


  useEffect(() => {
    setLoading(true);
    fetchData({ setUserData, setLoading, setError });
    fetchStock({ setStockData, setLoading, setError });

  }, []);

  useEffect(()=>{
    if(stockData){
      updateDailyStockData();

      const stockTimeSeriesDetails = stockData[timeSeries]; ///
      console.log({stockTimeSeriesDetails});
      let specificDatesTimeSeries = Object.keys(stockTimeSeriesDetails); ///dates
      setDateStocks(specificDatesTimeSeries);

      console.log({specificDatesTimeSeries});
      let ughOpen = Object.values(stockTimeSeriesDetails);
      console.log({ughOpen});

    }
  }, [stockData])


  const updateDailyStockData =()=>{
    // const timeSeriesDataDetail = Object.keys(stockData[timeSeries]).map(key=>stockData[timeSeries]);
    const timeSeriesDataDetail = Object.keys(stockData[timeSeries]).map(key=>stockData[timeSeries]);
    setDailyStock(timeSeriesDataDetail);


  }


  if(dailyStock){
    let hello = Object.values(dailyStock[0]);
    let newObject = Object.values(hello);
  }


  return (
    <div className="App">
      <header className="App-header">
        <label>Address Book</label>
      </header>
      {error ? <div>{error}</div> : <></>}
      {loading ? (
        <div>Loading, Please wait</div>
      ) : (
        <main>
          {/*<Card*/}
          {/*  data={userData}*/}
          {/*  setModal={setModal}*/}
          {/*  modal={modal}*/}
          {/*  setMemberData={setMemberData}*/}
          {/*/>*/}

          <h1>{stockSymbol}</h1>

          {/*<button onClick={updateDailyStockData}>*/}
          {/*  Do it please*/}
          {/*</button>*/}
          {dailyStock &&
          <div>{dailyStock[0]['2020-02-21'][openPriceString]}</div>
          }



          {dateStocks &&
            <div className="stock-section">
              {dateStocks.map((date:string, index:number)=>(
                <div key={index} className='card-individual'>
                  <h1>Date:</h1>
                  <p>{date}</p>
                  <h1>Open Price:</h1>
                  <p>{dailyStock[0][date][openPriceString]}</p>
                  <h1>High Price:</h1>
                  <p>{dailyStock[0][date][highPriceString]}</p>
                </div>
              ))}
            </div>
          }




          {modal.active && memberData && (
            <div className="modal">
              <h2 className="modal-header">
                {memberData.name && <div>Name: {memberData.name}</div>}
                <button
                  className="modal-close"
                  onClick={() => setModal({ active: false, dataID: 1 })}
                >
                  X
                </button>
              </h2>
              <div className="modal-content">
                <ul>
                  <li className="modal-details">Email: {memberData.email}</li>
                  <li className="modal-details">Phone: {memberData.phone}</li>
                </ul>
              </div>
            </div>
          )}
        </main>
      )}
    </div>
  );
};

export default App;
