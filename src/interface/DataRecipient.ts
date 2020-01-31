export interface addressObjectProps {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: { lat: string; lng: string };
}

export interface userJsonPlaceHolder {
  filter(arg0: (x: dataProps) => JSX.Element | void): import('react').ReactNode;
  map(
    arg0: (userInfo: dataProps) => JSX.Element | void,
  ): import('react').ReactNode;
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
