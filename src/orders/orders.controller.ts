import { Controller, Get, Post, Body, Patch, Param, Delete, UseFilters } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ErrorFilter } from 'src/filter';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get('get-by-client-id/:id')
  @UseFilters(new ErrorFilter())
  findOne(@Param('id') id: string) {
    console.log(id)
    return this.ordersService.findOne(+id);
  }
}
