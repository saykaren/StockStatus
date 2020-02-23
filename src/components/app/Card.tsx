import React from 'react';
import './../styling/Card.scss';
import {
  userJsonPlaceHolder,
  dataProps,
} from './../../interface/DataRecipient';

interface modalProps {
  active: boolean;
  dataID: number;
}

interface CardProps {
  data: userJsonPlaceHolder;
  setModal: (arg2: modalProps) => void;
  modal: modalProps;
  doc?: any;
  setMemberData: (arg1: dataProps) => void;
}

const Card = ({ data, setModal, modal, setMemberData }: CardProps) => {
  // const handleClick = (activeUserID: number) => {
  //   setModal({ ...modal, active: true, dataID: activeUserID });
  //   data.map((userInfo) => {
  //     if (userInfo.id === activeUserID) {
  //       setMemberData(userInfo);
  //     };
  //   });
  // };

  return (
    <section className="card-section">
      {/*{data &&*/}
      {/*  data.map((userInfo) => (*/}
      {/*    <ul key={userInfo.id} className="card-individual">*/}
      {/*      <li className="card-name-details">*/}
      {/*        <label>User Name:</label>*/}
      {/*        <div className="card-name-div">{userInfo.name}</div>*/}
      {/*      </li>*/}
      {/*      /!*<button onClick={() => handleClick(userInfo.id)}>*!/*/}
      {/*        More Information*/}
      {/*      </button>*/}
      {/*    </ul>*/}
      {/*  ))}*/}
    </section>
  );
};

export default Card;
