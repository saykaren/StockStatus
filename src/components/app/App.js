import React, {useState, useEffect} from 'react';
import './../styling/App.scss';
import Card from './Card';
import {fetchData} from './../utils/fetchUserData';

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
  const [modal, setModal] = useState({active: false, dataID: 1});

  useEffect(() =>{
    setLoading(true);
    fetchData({setUserData, setLoading, setError});
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <label>Address Book</label> 
      </header>
      {error ? <div>{error}</div> : <></>}
      {loading ? <div>Loading, Please wait</div> : 
            <main>
             <Card data={userData} setModal={setModal} modal={modal}/>

             {modal.active ? 
              <div className="modal">
                <h2>Modal is: {modal.dataID}</h2>
                <div className='content'>
                  Details here: {modal.dataID}
                  
       
                </div>
                <div className="actions">
                  <button onClick={()=>setModal({active: false, dataID: 1})}>X</button>
                </div>
                
              </div> : <></>}
 
           </main>
      }

    </div>
  );
}



export default App;
