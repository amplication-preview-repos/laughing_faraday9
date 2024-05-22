/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, SystemStatus as PrismaSystemStatus } from "@prisma/client";

export class SystemStatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.SystemStatusCountArgs, "select">
  ): Promise<number> {
    return this.prisma.systemStatus.count(args);
  }

  async systemStatuses<T extends Prisma.SystemStatusFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SystemStatusFindManyArgs>
  ): Promise<PrismaSystemStatus[]> {
    return this.prisma.systemStatus.findMany<Prisma.SystemStatusFindManyArgs>(
      args
    );
  }
  async systemStatus<T extends Prisma.SystemStatusFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SystemStatusFindUniqueArgs>
  ): Promise<PrismaSystemStatus | null> {
    return this.prisma.systemStatus.findUnique(args);
  }
  async createSystemStatus<T extends Prisma.SystemStatusCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SystemStatusCreateArgs>
  ): Promise<PrismaSystemStatus> {
    return this.prisma.systemStatus.create<T>(args);
  }
  async updateSystemStatus<T extends Prisma.SystemStatusUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SystemStatusUpdateArgs>
  ): Promise<PrismaSystemStatus> {
    return this.prisma.systemStatus.update<T>(args);
  }
  async deleteSystemStatus<T extends Prisma.SystemStatusDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SystemStatusDeleteArgs>
  ): Promise<PrismaSystemStatus> {
    return this.prisma.systemStatus.delete(args);
  }
}
