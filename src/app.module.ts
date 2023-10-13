import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KafkaModule } from './kafka/kafka.module';
import { ShopModule } from './shop/shop.module';

@Module({
  imports: [KafkaModule, ShopModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
