import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from 'src/entities/order.entity';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

@Injectable()
export class OrdersService {
  constructor(
		@InjectRepository(Order)
		private readonly ordersRepository: Repository<Order>,
	) {}

  async findOne(id: number) {
    if (id == 1){
      throw new Error("Error")
    }
    return await this.ordersRepository.findOne({
      where: {
        id: id
      },
      relations: ["products"]
    })
  }
}
