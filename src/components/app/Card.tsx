import React from 'react';
import './../styling/Card.scss';
import {
  userJsonPlaceHolder,
  dataProps,
} from './../../interface/DataRecipient';
import { karenSetData, mockItem } from './../data';

interface modalProps {
  active: boolean;
  dataID: number;
}

interface CardProps {
  data: userJsonPlaceHolder;
  // setModal: (arg2: modalProps) => modalProps;
  setModal: (arg2: modalProps) => void;
  modal: modalProps;
  doc?: any;
  setMemberData: (arg1: dataProps) => void;
}

interface userInfoProps {
  userInfo: dataProps;
}

const Card = ({ data, setModal, modal, setMemberData }: CardProps) => {
  const testingData = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  };

  const handleClick = (activeUserID: number) => {
    // setModal({...modal, active: true, dataID: activeUserID});
    setModal({ ...modal, active: true, dataID: activeUserID });
    // const newModalUser = data.filter((x)=>x.id === activeUserID);
    // const newModalUser = data.filter((x : dataProps)=>x.id ===activeUserID);
    const newTesting = testingData;
    const newModalUser = data.map((userInfo) => {
      if (userInfo.id === activeUserID) {
        setMemberData(userInfo);
      }
    });
    // const newModalUser = karenSetData;
    // setModal({...modal});
    // setMemberData(newModalUser);
    setMemberData(testingData);
  };

  return (
    <section className="card-section">
      {data &&
        data.map((userInfo) => (
          <ul key={userInfo.id} className="card-individual">
            <li className="card-name-details">
              <label>User Name:</label>
              {userInfo.name}
            </li>
            <button onClick={() => handleClick(userInfo.id)}>
              More Information
            </button>
          </ul>
        ))}
    </section>
  );
};

export default Card;
