import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { DocksModule } from './docks/docks.module';

@Module({
  imports: [DocksModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
