import { City, Commodity, Housing, Offer } from '../types/index.js';


export const createOffer = (row: string): Offer => {
  const [
    title,
    description,
    postDate,
    city,
    previewImage,
    images,
    isPremium,
    isFavorite,
    rating,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    name,
    mail,
    avatarUrl,
    isPro,
    password,
    latitude,
    longitude
  ] = row.replace('\n', '').split('\t');

  return {
    title,
    description,
    postDate: new Date(postDate),
    city: city as City,
    previewImage,
    images: images.split(';').map((img) => img),
    isPremium: Boolean(isPremium),
    isFavorite: Boolean(isFavorite),
    rating: Number(rating),
    type: type as Housing,
    bedrooms: Number(bedrooms),
    maxAdults: Number(maxAdults),
    price: Number(price),
    goods: goods.split(';').map((adv) => adv) as Commodity[],
    host: {avatarUrl, isPro: Boolean(isPro), name, mail, password},
    location: { latitude: Number(latitude), longitude: Number(longitude)}
  };
};
