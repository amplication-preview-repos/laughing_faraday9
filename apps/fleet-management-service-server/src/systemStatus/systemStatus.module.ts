import { Module } from "@nestjs/common";
import { SystemStatusModuleBase } from "./base/systemStatus.module.base";
import { SystemStatusService } from "./systemStatus.service";
import { SystemStatusController } from "./systemStatus.controller";
import { SystemStatusResolver } from "./systemStatus.resolver";

@Module({
  imports: [SystemStatusModuleBase],
  controllers: [SystemStatusController],
  providers: [SystemStatusService, SystemStatusResolver],
  exports: [SystemStatusService],
})
export class SystemStatusModule {}
