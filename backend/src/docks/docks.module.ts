import { Module } from '@nestjs/common';
import { DocksService } from './docks.service';
import { DocksController } from './docks.controller';
import { PrismaService } from '../prisma/prisma.service'; // Importe aqui também

@Module({
  controllers: [DocksController],
  providers: [DocksService, PrismaService], // Adicione o PrismaService nos providers
})
export class DocksModule {}