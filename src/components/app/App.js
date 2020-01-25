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
             <Card data={userData} setModal={setModal} modal={modal} setMemberData={setMemberData}/>

             {modal.active && 
              <div className="modal">
                <h2>Name: {memberData.name}</h2>
                <div className='content'>
                  <ul>
                    <li>Email: {memberData.email}</li>
                    <li>Address: 
                      {memberData.address.street}
                      {memberData.address.suite}
                      {memberData.address.city}, 
                      {memberData.address.zipcode}
                      </li>
                    <li>
                      Phone: {memberData.phone}
                    </li>
                  </ul>
                                  
       
                </div>
                <div className="actions">
                  <button onClick={()=>setModal({active: false, dataID: 1})}>X</button>
                </div>
                
              </div>}
 
           </main>
      }

    </div>
  );
}



export default App;
