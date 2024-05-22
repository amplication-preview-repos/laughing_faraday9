import { Module } from "@nestjs/common";
import { ProjectStatusModuleBase } from "./base/projectStatus.module.base";
import { ProjectStatusService } from "./projectStatus.service";
import { ProjectStatusController } from "./projectStatus.controller";
import { ProjectStatusResolver } from "./projectStatus.resolver";

@Module({
  imports: [ProjectStatusModuleBase],
  controllers: [ProjectStatusController],
  providers: [ProjectStatusService, ProjectStatusResolver],
  exports: [ProjectStatusService],
})
export class ProjectStatusModule {}
