import React from 'react';
import {dailyStockProps, dateDetailsProps, volumeDetailsProps} from './../../interface/StockDataInterface';


interface modalProps {
    active: boolean;
    dateString: string;
}

interface openDataProps {
    object: string,
}


interface StockProps {
    stockSymbol: any,
    dateStocks: [string],
    // dailyStock: dateDetailsProps,
    dailyStock:{string:object},
    setModal: (arg2: modalProps) =>void,
    modal: modalProps,
    dailyOpenData: [openDataProps],
    // dailyStock: [{2020-02-21:
    //                 {
    //                     '1. open': "170.9500",
    //                     '2. high': '171.0300',
    //                     '3. low': '169.40',
    //                     '4. close:' : "169.89",
    //                     '5. volume' : "2899061"
    //                 }
    // }],
}


const StockCard = ({stockSymbol, dateStocks, dailyStock, modal, setModal, dailyOpenData}: StockProps)=>{

    const handleClick = (activeUserID: string) => {
      setModal({ ...modal, active: true, dateString: activeUserID });
    };
    // const abcdef = dailyOpenData[0]['1. open'];
    console.log({dailyOpenData});
    const timeSeries = 'Time Series (Daily)';
    const openPriceString: string = '1. open';
    const highPriceString: string = '2. high';

    // const value = dailyStock['0']["2020-02-21"][openPriceString];
    console.log({dailyStock});
    return(
        <div>
            {dateStocks && (
                <div className="stock-section">
                    {dateStocks.map((date: string, index: number) => (
                        <div key={index} className="card-individual">
                            <h1>{stockSymbol}</h1>
                            <h2>Date:</h2>
                            <p>{date}</p>
                            {/*<p>{dailyStock['2020-02-20'][openPriceString]}</p>*/}
                            <button onClick={() =>handleClick(date)}>
                                More information
                            </button>
                        </div>

                    ))}
                </div>
            )}
        </div>
    );
}
// {dateStocks && (
//     <div className="stock-section">
//         {dateStocks.map((date: string, index: number) => (
//             <div key={index} className="card-individual">
//                 <h1>{stockSymbol}</h1>
//                 <h2>Date:</h2>
//                 <p>{date}</p>
//                 <h2>Open Price:</h2>
//                 <p>{dailyStock[0][date][openPriceString]}</p>
//                 <h2>High Price:</h2>
//                 <p>{dailyStock[0][date][highPriceString]}</p>
//             </div>
//         ))}
//     </div>
// )}
export default StockCard