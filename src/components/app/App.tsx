import React, { useState, useEffect } from 'react';
import './../styling/App.scss';
import { fetchStock, fetchForBatch } from './../utils/fetchUserData';
import './../styling/Card.scss';
import StockCard from './StockCard';

const timeSeries = 'Time Series (Daily)';
const openPriceString: string = '1. open';
const highPriceString: string = '2. high';

const App = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState({ active: false, dateString: '' });

  const [stockData, setStockData] = useState(); //full API response
  const [dailyStock, setDailyStock] = useState(); //filtered to Time Series Response

  // const [dateStocks, setDateStocks] = useState(); // Array of dates
  const [stockSymbol, setStockSymbol] = useState('VTI');
  const [inputString, setInputString] = useState();

  const [VOOStockData, setVOOStockData] = useState(); //VOO open prices
  const [VTIStockData, setVTIStockData] = useState(); //VTI open prices
  const [VTStockData, setVTStockData] = useState(); //VT open price

  const todaysDate = new Date();

  const todaysDateString = `${todaysDate.getFullYear()}-0${todaysDate.getMonth()+1}-${todaysDate.getDate()}`;

  useEffect(() => {
    setLoading(true);
    fetchStock({ setStockData, setLoading, setError, stockSymbol });
  }, [stockSymbol]);

  useEffect(()=>{
    setLoading(true);
    refreshing();
  }, []);

  const refreshing = ()=>{
    fetchForBatch({setLoading, setError, setVOOStockData, setVTIStockData, setVTStockData, stockSymbol, setStockData});
  }

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
          <div className='card-individual'>
            <button onClick={()=>refreshing()} >Refresh </button>
          </div>

          <div className='stock-section'>
            {VOOStockData &&
            (<div className='card-individual'>
              <h1>VOO</h1>
              {(VOOStockData.length>1) ?
                  (<h2>Open Price:{VOOStockData[0]}</h2>) :
                  <div>Loading</div>
              }
            </div>)
            }

            {VTIStockData &&
            (<div className='card-individual'>
              <h1>VTI</h1>
              {(VTIStockData.length>1) ?
                  (<h2>Open Price:{VTIStockData[0]}</h2>) :
                  <div>Loading</div>
              }
            </div>)
            }

            {VTStockData &&
            (<div className='card-individual'>
              <h1>VT</h1>
              {(VOOStockData.length>1) ?
                  (<h2>Open Price:{VOOStockData[0]}</h2>) :
                  <div>Loading</div>
              }
            </div>)
            }
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
