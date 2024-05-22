import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { OwnershipFirmServiceBase } from "./base/ownershipFirm.service.base";

@Injectable()
export class OwnershipFirmService extends OwnershipFirmServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
