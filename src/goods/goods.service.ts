import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from 'src/entities/order.entity';
import { OrderItem } from 'src/entities/orderItem.entity';
import { Product } from 'src/entities/product.entity';
import { Connection, Repository } from 'typeorm';
import { CreateGoodDto } from './dto/create-good.dto';
import { UpdateGoodDto } from './dto/update-good.dto';

@Injectable()
export class GoodsService {
  constructor(
    private connection: Connection
  ){}

  async findOne(id: number) {
    const ordersRepository = this.connection.getRepository(OrderItem)
    const order = await ordersRepository.createQueryBuilder("orderItems")
      .leftJoin("orderItems.order", "order")
      .leftJoin("orderItems.product", "product")
      .where({order: {client_id: id}})
      .select("orderItems")
      .addSelect("product.name")
      .addSelect("product.price")
      .getMany()
    // const orders = await this.ordersRepository.find({
    //   where: {
    //     client_id: id
    //   },
    //   relations: ["products"]
    // })

    // const response = orders.map((order) => {
    //   return order.products.map(product => {
    //     return {
    //       date: order.date,
    //       ...product
    //     }
    //   })
    // })

    // return response
    return order
  }
}
