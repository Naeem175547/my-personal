import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { products } from './fake.db';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

  async getProduct(id: number) {
    const cacheKey = `product:${id}`;
    const cachedProduct = await this.cacheManager.get(cacheKey);

    if (cachedProduct) {
      console.log('Cache hit');
      return cachedProduct;
    }

    console.log('Cache miss');
    const product = products.find((item) => item.id === id);
    if (!product) {
      return {
        message: 'Product not found!',
      };
    }

    await this.cacheManager.set(cacheKey, product);
    return product;
  }

  async updateProduct(id: number, price: number) {
    const product = products.find((item) => item.id === id);

    if (!product) {
      return {
        message: 'Product not found!',
      };
    }

    product.price = price;
    await this.cacheManager.set(`product:${id}`, product);

    console.log('Cache updated');
    return {
      message: 'Product updated successfully!',
      product,
    };
  }
}
