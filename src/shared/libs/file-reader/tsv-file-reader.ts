import { City, Commodity, Housing, Offer } from '../../types/index.js';
import { FileReader } from './file-reader.interface.js';
import { readFileSync } from 'node:fs';

export class TSVFileReader implements FileReader {
  private rawData = '';

  constructor(
    private readonly filename: string
  ) {}

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf-8' });
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      throw new Error('File was not read');
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim().length > 0)
      .map((line) => line.split('\t'))
      .map(([title, description, createdDate, city, previewImage, images, isPremium, isFavorite, rating, type, bedrooms, maxAdults, price, goods, name, mail, avatarUrl, isPro, password, latitude, longitude]) => ({
        title,
        description,
        postDate: new Date(createdDate),
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
      }));
  }
}