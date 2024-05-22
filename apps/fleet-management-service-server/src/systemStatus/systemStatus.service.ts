import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SystemStatusServiceBase } from "./base/systemStatus.service.base";

@Injectable()
export class SystemStatusService extends SystemStatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
