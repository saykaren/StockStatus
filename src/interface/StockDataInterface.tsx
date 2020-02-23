export interface stockDataProps {
    string: {string: string},
};

export interface dailyStockProps {
    dailyStockDetails: [dateDetailsProps]
}

export interface dateDetailsProps {
    dateDetails: {string :volumeDetailsProps};
}
export interface volumeDetailsProps {
    volumeDetails: {string: string}
}
// dailyStock: ['0':{
//                  2020-02-21:
    //                 {
    //                     '1. open': "170.9500",
    //                     '2. high': '171.0300',
    //                     '3. low': '169.40',
    //                     '4. close:' : "169.89",
    //                     '5. volume' : "2899061"
    //                 }
// }],
export default stockDataProps;