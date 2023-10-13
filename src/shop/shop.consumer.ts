import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConsumerService } from '../kafka/consumer/consumer.service';

@Injectable()
export class ShopConsumer implements OnModuleInit {
  constructor(private readonly _consumer: ConsumerService) {}

  async onModuleInit() {
    this._consumer.consume(
      'shop-approval-group-id',
      {
        topic: 'approve-shop',
        fromBeginning: true,
      },
      {
        eachMessage: async ({ topic, partition, message }) => {
          console.log({
            source: 'shop-approval',
            message: message.value.toString(),
            partition: partition.toString(),
            topic: topic.toString(),
          });
        },
      },
    );
  }
}
