export type ProfileDetail = {
  name: string;
  about: string;
  avatarImage: string;
  SocialMediaURL: string;
  backgroundImage:string;
};

export type User = {
  id: number;
  username: string;
  email: string;
  profile?: ProfileDetail;
};

export type Donation = {
  id: number;
  amount: number;
  specialMessage?: string;
  socialURLOrBuyMeCoffee: string;
  updatedAt: string;
  donorUsers?: User
};

export type UserContextProps = {
  token: string | null;
  userId: number | null;
  setToken: (token: string | null) => void;
  setUserId: (id: number | null) => void;
}
