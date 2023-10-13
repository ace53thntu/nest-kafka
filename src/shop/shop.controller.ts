import { Controller, Get, Post } from '@nestjs/common';
import { ShopService } from './shop.service';

@Controller('shop')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @Post()
  create() {
    return this.shopService.create();
  }

  @Get()
  findAll() {
    return this.shopService.findAll();
  }
}
