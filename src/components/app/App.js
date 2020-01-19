import React, {useState, useEffect} from 'react';
import './../styling/App.scss';
import Card from './Card';
import fetchData from './../utils/fetchUserData';
// import karenSetData from './../data';

// interface AppProps {
//   data: Object;
//   user: DataRecipient;
//   doc?: any;
// }

const App = ({data, user, doc})=>{
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);



  useEffect(()=>{
    fetchData(setUserData, setError, setLoading);
  }, []);


  // useEffect(() =>{
  //   setLoading(true);
  //   async function fetchData(){
  //     const res = await fetch(`http://jsonplaceholder.typicode.com/users`);
  //     res
  //       .json()
  //       .then(res=>setUserData(res))
  //       .then(setLoading(false));
  //   }
  
  //   fetchData();
  //   console.log(userData);
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        Address Book
 
      </header>
      {loading ? <div>Loading, Please wait</div> : 
            <main>
             <Card data={userData}/>
             Loading ? {loading} Error ? {error}
           </main>
      }

    </div>
  );
}



export default App;
