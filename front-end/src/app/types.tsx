export type ProfileDetail = {
  name: string;
  about: string;
  avatarImage: string;
  SocialMediaURL: string;
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
