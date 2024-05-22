import { Module } from "@nestjs/common";
import { SubTaskModuleBase } from "./base/subTask.module.base";
import { SubTaskService } from "./subTask.service";
import { SubTaskController } from "./subTask.controller";
import { SubTaskResolver } from "./subTask.resolver";

@Module({
  imports: [SubTaskModuleBase],
  controllers: [SubTaskController],
  providers: [SubTaskService, SubTaskResolver],
  exports: [SubTaskService],
})
export class SubTaskModule {}
