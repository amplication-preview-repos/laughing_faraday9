import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OwnershipFirmService } from "./ownershipFirm.service";
import { OwnershipFirmControllerBase } from "./base/ownershipFirm.controller.base";

@swagger.ApiTags("ownershipFirms")
@common.Controller("ownershipFirms")
export class OwnershipFirmController extends OwnershipFirmControllerBase {
  constructor(protected readonly service: OwnershipFirmService) {
    super(service);
  }
}
