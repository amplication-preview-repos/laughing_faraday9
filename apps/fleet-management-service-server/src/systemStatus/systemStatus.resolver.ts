import * as graphql from "@nestjs/graphql";
import { SystemStatusResolverBase } from "./base/systemStatus.resolver.base";
import { SystemStatus } from "./base/SystemStatus";
import { SystemStatusService } from "./systemStatus.service";

@graphql.Resolver(() => SystemStatus)
export class SystemStatusResolver extends SystemStatusResolverBase {
  constructor(protected readonly service: SystemStatusService) {
    super(service);
  }
}
