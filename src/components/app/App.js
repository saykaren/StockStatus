import React, {useState, useEffect} from 'react';
import './../styling/App.scss';
import Card from './Card';
import fetchData from './../utils/fetchUserData';

interface AppProps {
  data: Object;
  user: DataRecipient;
  doc?: any;
}

const App = ({data, user, doc}: AppProps)=>{
  const [userData, setUserData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);


  useEffect(()=>{
    fetchData(setUserData, setError, setLoading);
  }, []);

  console.log(userData);
  return (
    <div className="App">
      <header className="App-header">
        Address Book
 
      </header>
      {loading ? <div>Loading, Please wait</div> : 
            <main>
            <Card data={userData}/>
          </main>
      }

    </div>
  );
}



export default App;
