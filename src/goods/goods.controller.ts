import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { GoodsService } from './goods.service';
import { CreateGoodDto } from './dto/create-good.dto';
import { UpdateGoodDto } from './dto/update-good.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('goods')
export class GoodsController {
  constructor(private readonly goodsService: GoodsService) {}

  @UseGuards(JwtAuthGuard)
  @Get('get-by-client-id/:id')
  findOne(@Param('id') id: string) {
    return this.goodsService.findOne(+id);
  }
}
