import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SubTaskServiceBase } from "./base/subTask.service.base";

@Injectable()
export class SubTaskService extends SubTaskServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
