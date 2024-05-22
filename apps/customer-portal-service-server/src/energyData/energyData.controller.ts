import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EnergyDataService } from "./energyData.service";
import { EnergyDataControllerBase } from "./base/energyData.controller.base";

@swagger.ApiTags("energyData")
@common.Controller("energyData")
export class EnergyDataController extends EnergyDataControllerBase {
  constructor(protected readonly service: EnergyDataService) {
    super(service);
  }
}
