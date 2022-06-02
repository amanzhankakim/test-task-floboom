import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Client } from './entities/client.entity';
import { Order } from './entities/order.entity';
import { Product } from './entities/product.entity';
import { OrdersModule } from './orders/orders.module';
import { AuthModule } from './auth/auth.module';
import { GoodsModule } from './goods/goods.module';
import { OrderItem } from './entities/orderItem.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      autoLoadEntities: true,
      entities: [Client, Order, Product, OrderItem],
      synchronize: true,
    }),
    OrdersModule,
    AuthModule,
    GoodsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
