export type ProfileDetail = {
    name:string;
    about:string;
    avatarImage:string;
    SocialMediaURL:string;
}

export type User = {
    username:string;
    email:string;
    profile: ProfileDetail | {}
}

export type Donation = {
    amount:number;
    specialMessage:string;
    socialURLOrBuyMeCoffee:string;
}