import { Module } from '@nestjs/common';
import { GoodsService } from './goods.service';
import { GoodsController } from './goods.controller';
import { Product } from 'src/entities/product.entity';
import { Order } from 'src/entities/order.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Order, Product])],
  controllers: [GoodsController],
  providers: [GoodsService]
})
export class GoodsModule {}
