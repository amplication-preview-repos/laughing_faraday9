import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SystemStatusService } from "./systemStatus.service";
import { SystemStatusControllerBase } from "./base/systemStatus.controller.base";

@swagger.ApiTags("systemStatuses")
@common.Controller("systemStatuses")
export class SystemStatusController extends SystemStatusControllerBase {
  constructor(protected readonly service: SystemStatusService) {
    super(service);
  }
}
