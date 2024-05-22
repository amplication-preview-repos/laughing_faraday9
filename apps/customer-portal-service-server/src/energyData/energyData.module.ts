import { Module } from "@nestjs/common";
import { EnergyDataModuleBase } from "./base/energyData.module.base";
import { EnergyDataService } from "./energyData.service";
import { EnergyDataController } from "./energyData.controller";
import { EnergyDataResolver } from "./energyData.resolver";

@Module({
  imports: [EnergyDataModuleBase],
  controllers: [EnergyDataController],
  providers: [EnergyDataService, EnergyDataResolver],
  exports: [EnergyDataService],
})
export class EnergyDataModule {}
