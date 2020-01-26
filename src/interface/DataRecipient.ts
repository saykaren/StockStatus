export default interface DataRecipient {
  gender: string;
  name: object;
  location: object;
  email: string;
  login: object;
  dob: object;
  picture: object;
  nat: string;
}

export interface addressObjectProps {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: { lat: string; lng: string };
}

export interface userJsonPlaceHolder {
    filter(arg0: (x: dataProps) => JSX.Element): import("react").ReactNode;
    map(arg0: (userInfo: dataProps) => JSX.Element): import("react").ReactNode;
  [index: number]: {
    id: number;
    name: string;
    username: string;
    email: string;
    address: addressObjectProps;
    phone: string;
    website: string;
    company: { name: string; catchPhrase: string; bs: string };
  };
}

export interface dataProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: addressObjectProps;
  phone: string;
  website: string;
  company: { name: string; catchPhrase: string; bs: string };
}
