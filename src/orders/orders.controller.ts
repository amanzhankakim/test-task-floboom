import { Controller, Get, Post, Body, Patch, Param, Delete, UseFilters, UseInterceptors, Request, UseGuards } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { ErrorFilter } from 'src/filter';
import { TransformInterceptor } from 'src/interceptors/transform.interceptor';
import { request } from 'http';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('get/:id')
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(+id);
  }
}
