
//   async function fetchMemberData(){
//     const response = await fetch('https://randomuser.me/api/') 
//     .then(res => { if (!res.ok) { throw Error("Network request failed.") } return res }).catch((error) => { console.log(error);})
//   }

  export async function fetchData({setUserData, setLoading, setError}){
    const res = await fetch(`http://jsonplaceholder.typicode.com/users`);
    res
      .json()
      .then(res=>setUserData(res))
      .then(setLoading(false))
      .catch(err=>setError(err));
  }
// export const fetchData = (
//     setUserData: (dataObject: any) =>void,
//     setError: string,
//     setLoading: boolean,
// ) =>{
//     let url = 'https://randomuser.me/api/?results=100';

//     setLoading(true);
//     async function fetch(){
//         const res = await fetch(url);
//         res
//             .json()
//             .then(res=>setUserData(res))
//             .then(setLoading(false))
//             .catch(err=>setError(err));
    
//     }
// }

// export const fetchData = ({
//     setUserData,
//     setError,
//     setLoading,
// }) =>{
//     let url = 'https://randomuser.me/api/?results=10';
//     // let url = 'http://jsonplaceholder.typicode.com/users';
//     // const url = 'https://uinames.com/api/';

//     setLoading(true);
//     async function fetchDataAPI(){
//         const res = await fetch(url);

//         res
//             .json()
//             .then(res=>setUserData(res))
//             .then(setLoading(false))
//             .catch(err=>setError(err));
            
    
//     }
    
//     fetchDataAPI();
    
// }



export default fetchData;