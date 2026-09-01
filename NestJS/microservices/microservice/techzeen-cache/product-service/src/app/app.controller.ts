import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('products')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  getProduct(@Param('id', ParseIntPipe) id: number) {
    return this.appService.getProduct(id);
  }

  @Patch(':id')
  updateProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body('price', ParseIntPipe) price: number,
  ) {
    return this.appService.updateProduct(id, price);
  }
}