import React, { useState, useEffect } from 'react';
import './../styling/App.scss';
import { fetchData, fetchStock } from './../utils/fetchUserData';
import Card from './Card';
import {
  userJsonPlaceHolder,
  dataProps,
} from './../../interface/DataRecipient';

const App = () => {
  const [userData, setUserData] = useState<userJsonPlaceHolder>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [memberData, setMemberData] = useState<dataProps | undefined>();
  const [modal, setModal] = useState({ active: false, dataID: 1 });

  const [stockData, setStockData] = useState();

  console.log(stockData);

  useEffect(() => {
    setLoading(true);
    fetchData({ setUserData, setLoading, setError });
    fetchStock({ setStockData, setLoading, setError });
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <label>Address Book</label>
      </header>
      {error ? <div>{error}</div> : <></>}
      {loading ? (
        <div>Loading, Please wait</div>
      ) : (
        <main>
          <Card
            data={userData}
            setModal={setModal}
            modal={modal}
            setMemberData={setMemberData}
          />
          {modal.active && memberData && (
            <div className="modal">
              <h2 className="modal-header">
                {memberData.name && <div>Name: {memberData.name}</div>}
                <button
                  className="modal-close"
                  onClick={() => setModal({ active: false, dataID: 1 })}
                >
                  X
                </button>
              </h2>
              <div className="modal-content">
                <ul>
                  <li className="modal-details">Email: {memberData.email}</li>
                  <li className="modal-details">Phone: {memberData.phone}</li>
                </ul>
              </div>
            </div>
          )}
        </main>
      )}
    </div>
  );
};

export default App;
