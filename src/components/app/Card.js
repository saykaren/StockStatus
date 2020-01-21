import React from 'react';
import './../styling/Card.scss';

const Card = ({data, setModal, modal})=>{
  console.log(data);

    return(
        <section className="card-section">
            {data && data.map(userInfo =>(
              <ul key={userInfo.id} className="card-individual">
                <li className="card-name-details">
                  <label>User Information:</label> 
                  {userInfo.name}
                </li>
                <li className="card-name-details">
                  <label>Username:</label> 
                  {userInfo.username}
                </li>
                <li className="card-name-details">
                  <label>email:</label> 
                  {userInfo.email}
                </li>
                <button onClick={()=>setModal({...modal, active: true, dataID: userInfo.id})}>More Info</button>
              </ul>
            ))}
        </section>
    );
}

export default Card;
