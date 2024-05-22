/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Interaction as PrismaInteraction } from "@prisma/client";

export class InteractionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.InteractionCountArgs, "select">
  ): Promise<number> {
    return this.prisma.interaction.count(args);
  }

  async interactions<T extends Prisma.InteractionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.InteractionFindManyArgs>
  ): Promise<PrismaInteraction[]> {
    return this.prisma.interaction.findMany<Prisma.InteractionFindManyArgs>(
      args
    );
  }
  async interaction<T extends Prisma.InteractionFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.InteractionFindUniqueArgs>
  ): Promise<PrismaInteraction | null> {
    return this.prisma.interaction.findUnique(args);
  }
  async createInteraction<T extends Prisma.InteractionCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.InteractionCreateArgs>
  ): Promise<PrismaInteraction> {
    return this.prisma.interaction.create<T>(args);
  }
  async updateInteraction<T extends Prisma.InteractionUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.InteractionUpdateArgs>
  ): Promise<PrismaInteraction> {
    return this.prisma.interaction.update<T>(args);
  }
  async deleteInteraction<T extends Prisma.InteractionDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.InteractionDeleteArgs>
  ): Promise<PrismaInteraction> {
    return this.prisma.interaction.delete(args);
  }
}
