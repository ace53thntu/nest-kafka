import { Injectable } from '@nestjs/common';
import { ProducerService } from '../kafka/producer/producer.service';

@Injectable()
export class ShopService {
  constructor(private readonly _kafka: ProducerService) {}

  create() {
    console.log('create');
    this._kafka.produce({
      topic: 'approve-shop',
      messages: [{ value: 'this is shop approval' }],
    });
  }

  findAll() {
    return `This action returns all shop`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shop`;
  }
}
