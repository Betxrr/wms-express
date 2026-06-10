import { Controller, Get, Post, Body } from '@nestjs/common';
import { DocksService } from './docks.service';

@Controller('docks')
export class DocksController {
  constructor(private readonly docksService: DocksService) {}

  @Post()
  create(@Body() data: any) {
    // Recebe o pedido da internet e manda pro Service processar
    return this.docksService.create(data);
  }

  @Get()
  findAll() {
    return this.docksService.findAll();
  }
}