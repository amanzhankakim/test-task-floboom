import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from 'src/entities/client.entity';
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
    const clientRepository = this.connection.getRepository(Client)
    const client = await clientRepository.findOne({id: id})
    if (!client) throw new Error("CLIENT_DOES_NOT_EXIST")

    const ordersRepository = this.connection.getRepository(OrderItem)
    const order = await ordersRepository.createQueryBuilder("orderItems")
      .leftJoin("orderItems.order", "order")
      .leftJoin("orderItems.product", "product")
      .where({order: {client_id: id}})
      .select("orderItems")
      .addSelect("product.name")
      .addSelect("product.price")
      .getMany()
      
    return order
  }
}
