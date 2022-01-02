import { PrismaService } from "nestjs-prisma";
import { Prisma, Tata, BlaBla } from "@prisma/client";

export class TataServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.TataFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TataFindManyArgs>
  ): Promise<number> {
    return this.prisma.tata.count(args);
  }

  async findMany<T extends Prisma.TataFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.TataFindManyArgs>
  ): Promise<Tata[]> {
    return this.prisma.tata.findMany(args);
  }
  async findOne<T extends Prisma.TataFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.TataFindUniqueArgs>
  ): Promise<Tata | null> {
    return this.prisma.tata.findUnique(args);
  }
  async create<T extends Prisma.TataCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TataCreateArgs>
  ): Promise<Tata> {
    return this.prisma.tata.create<T>(args);
  }
  async update<T extends Prisma.TataUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.TataUpdateArgs>
  ): Promise<Tata> {
    return this.prisma.tata.update<T>(args);
  }
  async delete<T extends Prisma.TataDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.TataDeleteArgs>
  ): Promise<Tata> {
    return this.prisma.tata.delete(args);
  }

  async getTodo(parentId: string): Promise<BlaBla | null> {
    return this.prisma.tata
      .findUnique({
        where: { id: parentId },
      })
      .todo();
  }
}
