import { City, Comment, Commodity, Housing, Location, User } from './index.js';

export type Offer = {
  title: string,
  description: string,
  postDate: Date;
  city: City,
  previewImage: string,
  images: string[],
  isPremium: boolean,
  isFavorite: boolean,
  rating: number,
  type: Housing,
  bedrooms: number,
  maxAdults: number,
  price: number,
  goods: Commodity[],
  host: User,
  comments?: Comment[],
  location: Location,
};
