import dayjs from 'dayjs';
import { getRandomItem, generateRandomValue, getRandomItems } from '../../helpers/common.js';
import { WeekDay, RatingRange, BedroomsRange, AdultsRange, PriceRange, CoordinatesRange } from '../../helpers/const.js';
import { MockServerData } from '../../types/mock-server-data.type.js';
import { OfferGenerator } from './offer-generator.interface.js';

export default class TSVOfferGenerator implements OfferGenerator {
  constructor(private readonly mockData: MockServerData) {}

  public generate(): string {
    const title = getRandomItem<string>(this.mockData.titles);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const postDate = dayjs().subtract(generateRandomValue(WeekDay.First, WeekDay.Last), 'day').toISOString();
    const city = getRandomItem<string>(this.mockData.cities);
    const previewImage = getRandomItem<string>(this.mockData.previewImages);
    const images = getRandomItems<string>(this.mockData.images).join(';');
    const isPremium = getRandomItem(['true', 'false']);
    const isFavorite = getRandomItem(['true', 'false']);
    const rating = generateRandomValue(RatingRange.MIN, RatingRange.MAX, 1).toString();
    const type = getRandomItem<string>(this.mockData.types);
    const bedrooms = generateRandomValue(BedroomsRange.MIN, BedroomsRange.MAX).toString();
    const maxAdults = generateRandomValue(AdultsRange.MIN, AdultsRange.MAX).toString();
    const price = generateRandomValue(PriceRange.MIN, PriceRange.MAX).toString();
    const goods = getRandomItems<string>(this.mockData.goods).join(';');
    const avatar = getRandomItem<string>(this.mockData.avatarUrls);
    const isPro = getRandomItem(['true', 'false']);
    const name = getRandomItem<string>(this.mockData.names);
    const mail = getRandomItem<string>(this.mockData.mails);
    const latitude = generateRandomValue(CoordinatesRange.MIN, CoordinatesRange.MAX, 5).toString();
    const longitude = generateRandomValue(CoordinatesRange.MIN, CoordinatesRange.MAX, 5).toString();

    const [firstname, lastname] = name.split(' ');

    return [
      title, description, postDate, city, previewImage, images,
      isPremium, isFavorite, rating, type, bedrooms, maxAdults,
      price, goods, avatar, isPro, firstname, lastname, mail, latitude,
      longitude
    ].join('\t');
  }
}
