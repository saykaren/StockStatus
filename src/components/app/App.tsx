import React, { useState, useEffect } from 'react';
import './../styling/App.scss';
import {
  fetchStock,
  fetchForBatch,
  fetchingEachNow,
} from './../utils/fetchUserData';
import './../styling/Card.scss';
// import StockCard from './StockCard';

// const timeSeries = 'Time Series (Daily)';
const openPriceString: string = '1. open';
// const highPriceString: string = '2. high';

const App = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({ active: false, dateString: '' });

  const [stockData, setStockData] = useState(); //full API response
  const [dailyStock, setDailyStock] = useState(); //filtered to Time Series Response

  // const [dateStocks, setDateStocks] = useState(); // Array of dates
  const [stockSymbol, setStockSymbol] = useState('SPTM');
  const [inputString, setInputString] = useState();
  const [activeClick, setActiveClick] = useState();

  const [vooStockData, setVOOStockData] = useState(); //VOO open prices
  const [vtiStockData, setVTIStockData] = useState(); //VTI open prices
  const [vtStockData, setVTStockData] = useState(); //VT open price

  const [lastRefreshedDate, setLastRefreshedDate] = useState();

  const todaysDate = new Date();
  console.log({ stockData });

  const todaysDateString = `${todaysDate.getFullYear()}-0${todaysDate.getMonth() +
    1}-${todaysDate.getDate()}`;

  useEffect(() => {
    setLoading(true);
    fetchStock({ setStockData, setLoading, setError, stockSymbol });
  }, [stockSymbol]);

  // useEffect(() => {
  //   setLoading(true);
  //   fetchStock({ setStockData, setLoading, setError, stockSymbol });
  // }, [activeClick]);

  useEffect(() => {
    setLoading(true);
    refreshing();
  }, []);

  const refreshing = () => {
    fetchForBatch({
      setLoading,
      setError,
      setVOOStockData,
      setVTIStockData,
      setVTStockData,
      stockSymbol,
      setStockData,
      setLastRefreshedDate,
    });
  };

  const clickFetch = (fetchSymbol: string) => {
    // console.log('hi');
    //
    // let result = fetchSymbol;
    // let symbolTest = 'VTI';
    // console.log({ fetchSymbol });
    // fetchStock({ setStockData, setLoading, setError, fetchSymbol });
    // // fetchingEachNow({symbolTest, setVTIStockData, setLoading, setError})
  };

  const buttonHandler = () => {
    inputString ? setStockSymbol(inputString) : setStockSymbol('VT');
  };

  return (
    <div className="App">
      <header className="App-header">
        <label>Stock Checker</label>
      </header>
      {error ? <div>Whoops my bad</div> : <></>}
      {loading ? (
        <div>Loading, Please wait</div>
      ) : (
        <main>
          <div className="card-individual">
            <form>
              <label>
                Stock Symbol:
                <input
                  type="text"
                  name="stockSymbol"
                  id="stockSymbol"
                  onChange={(e) => setInputString(e.currentTarget.value)}
                />
              </label>
            </form>
            <button onClick={buttonHandler}>Change</button>
          </div>
          <div className="card-individual">
            <button onClick={() => refreshing()}>Refresh </button>
            <button onClick={() => setActiveClick(true)}>Fetch Again</button>
          </div>

          <div className="stock-section">
            {vooStockData && (
              <div className="card-individual">
                <h1>VOO</h1>
                {vooStockData.length > 1 ? (
                  <div>
                    <h2>Open Price:{vooStockData[0]}</h2>
                    <span>Date: {lastRefreshedDate} </span>
                  </div>
                ) : (
                  <div>
                    <h2>Loading</h2>
                    {/*<button onClick={() => clickFetch('VOO')}>Fetch</button>*/}
                    {/*<button onClick={()=> setActiveClick(true)}>Fetch Again</button>*/}
                  </div>
                )}
              </div>
            )}

            {vtiStockData && (
              <div className="card-individual">
                <h1>VTI</h1>
                {vtiStockData.length > 1 ? (
                  <div>
                    <h2>Open Price:{vtiStockData[0]}</h2>
                    <span>Date: {lastRefreshedDate} </span>
                  </div>
                ) : (
                  <div>
                    <h2>Loading</h2>
                    {/*<button onClick={() => clickFetch('VTI')}>Fetch</button>*/}
                    {/*<button onClick={()=> setActiveClick(true)}>Fetch Again</button>*/}
                  </div>
                )}
              </div>
            )}

            {vtStockData && (
              <div className="card-individual">
                <h1>VT</h1>
                {vtStockData.length > 1 ? (
                  <div>
                    <h2>Open Price:{vtStockData[0]}</h2>
                    <span>Date: {lastRefreshedDate} </span>
                  </div>
                ) : (
                  <div>
                    <h2>Loading</h2>
                    {/*<button onClick={() => clickFetch('VT')}>Fetch</button>*/}
                    {/*<button onClick={()=> setActiveClick(true)}>Fetch Again</button>*/}
                  </div>
                )}
              </div>
            )}

            {stockData && (
              <div className="card-individual">
                <h1>{stockSymbol}</h1>
                {stockData.length > 1 ? (
                  <div>
                    <h2>Open Price:{stockData[0]}</h2>
                    <span>Date: {lastRefreshedDate} </span>
                  </div>
                ) : (
                  <div>
                    <h2>Loading</h2>
                    {/*<button onClick={() => clickFetch('VT')}>Fetch</button>*/}
                    {/*<button onClick={()=> setActiveClick(true)}>Fetch Again</button>*/}
                  </div>
                )}
              </div>
            )}
          </div>

          {/*<StockCard*/}
          {/*  stockSymbol={stockSymbol}*/}
          {/*  dateStocks={dateStocks}*/}
          {/*  dailyStock={dailyStock}*/}
          {/*  setModal={setModal}*/}
          {/*  modal={modal}*/}
          {/*  dailyOpenData={dailyOpenData}*/}
          {/*/>*/}

          {/*{dateStocks && (*/}
          {/*  <div className="stock-section">*/}
          {/*    {dateStocks.map((date: string, index: number) => (*/}
          {/*      <div key={index} className="card-individual">*/}
          {/*        <h1>{stockSymbol}</h1>*/}
          {/*        <h2>Date:</h2>*/}
          {/*        <p>{date}</p>*/}
          {/*        <h2>Open Price:</h2>*/}
          {/*        <p>{dailyStock[date][openPriceString]}</p>*/}
          {/*        <h2>High Price:</h2>*/}
          {/*        <p>{dailyStock[date][highPriceString]}</p>*/}
          {/*      </div>*/}
          {/*    ))}*/}
          {/*  </div>*/}
          {/*)}*/}

          {modal.active && stockData && (
            <div className="modal">
              <h2 className="modal-header">
                {stockSymbol} : {modal.dateString}
                <button
                  className="modal-close"
                  onClick={() =>
                    setModal({ active: false, dateString: '2020-02-20' })
                  }
                >
                  X
                </button>
              </h2>
              <div className="modal-content">
                <ul>
                  <li className="modal-details">
                    Open Value: {dailyStock[modal.dateString][openPriceString]}
                  </li>
                  <li className="modal-details">
                    High Value: {dailyStock[modal.dateString]['2. high']}
                  </li>
                  <li className="modal-details">
                    Low Value: {dailyStock[modal.dateString]['3. low']}
                  </li>
                  <li className="modal-details">
                    Close Value: {dailyStock[modal.dateString]['4. close']}
                  </li>
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
