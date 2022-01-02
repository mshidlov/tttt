import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { TataServiceBase } from "./base/tata.service.base";

@Injectable()
export class TataService extends TataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
