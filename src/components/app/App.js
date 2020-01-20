import React, {useState, useEffect} from 'react';
import './../styling/App.scss';
import Card from './Card';
// import fetchData from './../utils/fetchUserData';


// interface AppProps {
//   data: Object;
//   user: DataRecipient;
//   doc?: any;
// }

const App = ()=>{
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [memberData, setMemberData] = useState();

  

  // useEffect(()=>{
  //   fetchData(setUserData, setError, setLoading);
  // }, []);



  useEffect(() =>{
    setLoading(true);
    async function fetchMemberData(){
      const response = await fetch('https://randomuser.me/api/') 
      .then(res => { if (!res.ok) { throw Error("Network request failed.") } return res }).catch((error) => { console.log(error);})
    }

    fetchMemberData();
  }, []);

  useEffect(() =>{
    setLoading(true);
    async function fetchData(){
      const res = await fetch(`http://jsonplaceholder.typicode.com/users`);
      res
        .json()
        .then(res=>setUserData(res))
        .then(setLoading(false))
        .catch(err=>setError(err));
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        Address Book
 
      </header>
      {error ? <div>{error}</div> : <></>}
      {loading ? <div>Loading, Please wait</div> : 
            <main>
             <Card data={userData}/>
             On App 
           </main>
      }

    </div>
  );
}



export default App;
