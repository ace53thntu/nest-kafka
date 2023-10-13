import { Module } from '@nestjs/common';
import { ShopService } from './shop.service';
import { ShopController } from './shop.controller';
import { KafkaModule } from '../kafka/kafka.module';
import { ShopConsumer } from './shop.consumer';

@Module({
  imports: [KafkaModule],
  controllers: [ShopController],
  providers: [ShopService, ShopConsumer],
})
export class ShopModule {}
