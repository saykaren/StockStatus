import React from 'react';
// import './../styling/App.scss';
// import Card from './Card';
import './../styling/Card.scss';


const Card = ({userData})=>{

    // const dataGender = {userData.gender};
    // const gender = {userData};

    // console.log(gender);
// console.log({karenSetData});

    return(
        <section className="card-section">


{userData && userData.map((x)=>(
                <tr key={x.id}>
                  <th
                    key={x.id+x.name}
                  >{x.name}</th>
                  <th
                    key={x.username}
                  >{x.username}</th>
                  <th
                    key={x.id+x.email}
                  >{x.email}</th>
                </tr>
              ))}


        </section>
        
    )
    
}

export default Card;
