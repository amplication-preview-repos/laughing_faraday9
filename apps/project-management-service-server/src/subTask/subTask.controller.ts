import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SubTaskService } from "./subTask.service";
import { SubTaskControllerBase } from "./base/subTask.controller.base";

@swagger.ApiTags("subTasks")
@common.Controller("subTasks")
export class SubTaskController extends SubTaskControllerBase {
  constructor(protected readonly service: SubTaskService) {
    super(service);
  }
}
