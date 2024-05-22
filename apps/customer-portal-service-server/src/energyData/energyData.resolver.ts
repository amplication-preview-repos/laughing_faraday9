import * as graphql from "@nestjs/graphql";
import { EnergyDataResolverBase } from "./base/energyData.resolver.base";
import { EnergyData } from "./base/EnergyData";
import { EnergyDataService } from "./energyData.service";

@graphql.Resolver(() => EnergyData)
export class EnergyDataResolver extends EnergyDataResolverBase {
  constructor(protected readonly service: EnergyDataService) {
    super(service);
  }
}
