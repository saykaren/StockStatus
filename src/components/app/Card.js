import React from 'react';
import './../styling/Card.scss';

const Card = ({data, setModal, modal, setMemberData})=>{
  const handleClick = (activeUserID)=>{
    setModal({...modal, active: true, dataID: activeUserID});
    const newModalUser = data.filter(x=> (x.id ===activeUserID));
    setMemberData(newModalUser[0]);
  };

    return(
        <section className="card-section">
            {data && data.map(userInfo =>(
              <ul key={userInfo.id} className="card-individual">
                <li className="card-name-details">
                  <label>User Name:</label> 
                  {userInfo.name}
                </li>
                <button onClick={()=>handleClick(userInfo.id)}>More Information</button>
              </ul>
            ))}
        </section>
    );
}

export default Card;
