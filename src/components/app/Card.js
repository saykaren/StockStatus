import React from 'react';
// import './../styling/App.scss';
// import Card from './Card';
import './../styling/Card.scss';


const Card = ({data})=>{
  console.log(data);

    return(
        <section className="card-section">
            {data && data.map(userInfo =>(
              <ul key={userInfo.id} className="card-individual">
                User Information: 
                <li className="card-name-details">
                {userInfo.name}
                </li>
                <li className="card-name-details">
                  Username: 
                {userInfo.username}
                </li>
                <li className="card-name-details">
                  email: 
                {userInfo.email}
                </li>
                
              </ul>
            ))}



        </section>
        
    )
    
}

export default Card;
