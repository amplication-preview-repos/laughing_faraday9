import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProjectStatusService } from "./projectStatus.service";
import { ProjectStatusControllerBase } from "./base/projectStatus.controller.base";

@swagger.ApiTags("projectStatuses")
@common.Controller("projectStatuses")
export class ProjectStatusController extends ProjectStatusControllerBase {
  constructor(protected readonly service: ProjectStatusService) {
    super(service);
  }
}
