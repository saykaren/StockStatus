import React, { useState, useEffect } from 'react';
import './../styling/App.scss';
import { fetchData, fetchStock } from './../utils/fetchUserData';
import Card from './Card';
import {
  userJsonPlaceHolder,
  dataProps,
} from './../../interface/DataRecipient';

const timeSeries = 'Time Series (Daily)';
const openPriceString: string = "1. open";

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

  // let timeSeries = stockData[""Time Series (Daily)""];

  // let testing = stockData['2020-02-20']['1. open'];
  // console.log(testing);
  // console.log({stockData});


  useEffect(() => {
    setLoading(true);
    fetchData({ setUserData, setLoading, setError });
    fetchStock({ setStockData, setLoading, setError });

  }, []);

  useEffect(()=>{
    if(stockData){
      updateDailyStockData();

      let ugh = stockData[timeSeries]; ///
      console.log({ugh});
      let ughKey = Object.keys(ugh); ///dates
      setDateStocks(ughKey);
      console.log({ughKey});
      let ughOpen = Object.values(ugh);
      console.log({ughOpen});

      // let beforeBitchness = ughOpen["0"];
      // let ughBitches = beforeBitchness['1. open'];
      // console.log({ughBitches});


    }


  }, [stockData])

  // useEffect(()=>{
  //   if(dailyStock){
  //     console.log(`hola ${dailyStock[0]['2020-02-21'][openPriceString]}`);
  //   }
  // }, [dailyStock]);


  const updateDailyStockData =()=>{
    // const timeSeriesDataDetail = Object.keys(stockData[timeSeries]).map(key=>stockData[timeSeries]);
    const timeSeriesDataDetail = Object.keys(stockData[timeSeries]).map(key=>stockData[timeSeries]);
    setDailyStock(timeSeriesDataDetail);


  }

  const doIt = () =>{
    // console.log(dailyStock);
  }

  if(dailyStock){
    // let hello = dailyStock.map(Object.keys);
    // let hello = dailyStock.map((x:object)=>console.log(Object.values(x)));
    let hello = Object.values(dailyStock[0]);
    let newObject = Object.values(hello);
    // console.log({hello});
    // console.log(typeof(hello));
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
          <Card
            data={userData}
            setModal={setModal}
            modal={modal}
            setMemberData={setMemberData}
          />

          <button onClick={updateDailyStockData}>
            Do it please
          </button>

          {dailyStock &&
          <div>{dailyStock[0]['2020-02-21'][openPriceString]}</div>
          }

          {dateStocks &&
            <div>
              {/*{dailyStock.map((data:any, index:number)=>console.log(`data ${data[0]['2020-02-21'][openPriceString]}`))}*/}
              {/*{dailyStock.map((data:any, index:number)=>console.log(Object.values(data)))}*/}
              {/*{stockData[timeSeries]}*/}
              {/*{console.log({dateStocks})}*/}
              {dateStocks.map((date:string, index:number)=>(
                <div key={index} className='card-individual'>
                  Date: {date}
                </div>
              ))}



            </div>
          }
          {/*<div>{dailyStock[0]}</div>*/}
          {/*{dailyStock &&*/}
          {/*<div>*/}
          {/*  /!*{Object.values(dailyStock)}*!/*/}
          {/*  /!*{Object.values(dailyStock[0].map(x=>(*!/*/}
          {/*  /!*console.log(x))));}*!/*/}
          {/*  {Object.values(dailyStock[0].map(x=>{*/}
          {/*    console.log(x);*/}
          {/*  }))}*/}

          {/*</div>*/}
          {/*}*/}

          {/*{dailyStock &&*/}
          {/*  Object.values(dailyStock[0]).map((stockObject:any, index)=>{*/}
          {/*    let testingDiv = stockObject[openPriceString];*/}
          {/*    // console.log(stockObject[openPriceString]);*/}
          {/*    // console.log(testingDiv);*/}
          {/*    // console.log(index)*/}

          {/*    }*/}
          {/*  )*/}

          {/*}*/}

          <button onClick={doIt}>
            test console.log
          </button>

            {/*<section className="stock-section">*/}

            {/*  {stockData &&*/}
            {/*  stockData.map((userInfo: any) => (*/}
            {/*      <ul key={userInfo['2020-02-21']} className="card-individual">*/}
            {/*        <li className="card-name-details">*/}
            {/*          <label>User Name:</label>*/}
            {/*          <div className="card-name-div">{userInfo['2020-02-21']['1. open']}</div>*/}
            {/*        </li>*/}
            {/*        <button >*/}
            {/*          More Information*/}
            {/*        </button>*/}
            {/*      </ul>*/}
            {/*  ))}*/}
            {/*</section>*/}

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
