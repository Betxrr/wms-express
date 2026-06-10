import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DocksService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.DockCreateInput) {
    return this.prisma.dock.create({ data });
  }

  findAll() {
    return this.prisma.dock.findMany();
  }
}
