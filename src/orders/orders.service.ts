import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from 'src/entities/order.entity';
import { Connection, Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  constructor(
		@InjectRepository(Order)
		private readonly ordersRepository: Repository<Order>,
    private connection: Connection
	) {}

  async findOne(id: number) {
    const ordersRepository = this.connection.getRepository(Order)
    const order = await ordersRepository.createQueryBuilder("order")
      .where({id: id})
      .leftJoinAndSelect("order.orderItems", "orderItems")
      .leftJoin("orderItems.product", "product")
      .select("order")
      .addSelect("orderItems.quantity")
      .addSelect("orderItems.product_id")
      .addSelect("product.name")
      .addSelect("product.price")
      .getOne()
      
    if (!order) {
      throw new Error("ORDER_DOES_NOT_EXIST")
    }
    return order
  }
}
