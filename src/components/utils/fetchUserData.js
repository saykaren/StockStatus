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

export const fetchData = (
    setUserData,
    setError,
    setLoading,
) =>{
    let url = 'https://randomuser.me/api/?results=100';

    setLoading(true);
    async function fetchDataAPI(){
        const res = await fetch(url);
        res
            .json()
            .then(res=>setUserData(res))
            .then(setLoading(false))
            .catch(err=>setError(err));
    
    }

    fetchDataAPI();
}

export default fetchData;