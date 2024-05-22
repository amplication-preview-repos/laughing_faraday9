import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EnergyDataServiceBase } from "./base/energyData.service.base";

@Injectable()
export class EnergyDataService extends EnergyDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
