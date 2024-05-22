import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProjectStatusServiceBase } from "./base/projectStatus.service.base";

@Injectable()
export class ProjectStatusService extends ProjectStatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
