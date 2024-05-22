import * as graphql from "@nestjs/graphql";
import { OwnershipFirmResolverBase } from "./base/ownershipFirm.resolver.base";
import { OwnershipFirm } from "./base/OwnershipFirm";
import { OwnershipFirmService } from "./ownershipFirm.service";

@graphql.Resolver(() => OwnershipFirm)
export class OwnershipFirmResolver extends OwnershipFirmResolverBase {
  constructor(protected readonly service: OwnershipFirmService) {
    super(service);
  }
}
