import { Module } from "@nestjs/common";
import { OwnershipFirmModuleBase } from "./base/ownershipFirm.module.base";
import { OwnershipFirmService } from "./ownershipFirm.service";
import { OwnershipFirmController } from "./ownershipFirm.controller";
import { OwnershipFirmResolver } from "./ownershipFirm.resolver";

@Module({
  imports: [OwnershipFirmModuleBase],
  controllers: [OwnershipFirmController],
  providers: [OwnershipFirmService, OwnershipFirmResolver],
  exports: [OwnershipFirmService],
})
export class OwnershipFirmModule {}
