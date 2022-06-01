import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Client } from './entities/client.entity';
import { Order } from './entities/order.entity';
import { Product } from './entities/product.entity';
import { OrdersModule } from './orders/orders.module';

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
      entities: [Client, Order, Product],
      synchronize: true,
    }),
    OrdersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
