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
                <h2 className="modal-header">Name: {memberData.name}
                  <button className="modal-close" onClick={()=>setModal({active: false, dataID: 1})}>
                    X                 
                  </button>
                </h2>
                <div className='modal-content'>
                  <ul>
                    <li className='modal-details'>Email: {memberData.email}</li>
                    <li className='modal-details'>Address: 
                      {memberData.address.street}
                      {memberData.address.suite}
                      {memberData.address.city}, 
                      {memberData.address.zipcode}
                      </li>
                    <li className='modal-details'>
                      Phone: {memberData.phone}
                    </li>
                  </ul>
                                  
       
                </div>

                
              </div>}
 
           </main>
      }

    </div>
  );
}



export default App;
