type TAddress = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: number;
    lng: number;
  };
};

type TCompany = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: TAddress;
  phone: string;
  website: string;
  company: TCompany;
}
