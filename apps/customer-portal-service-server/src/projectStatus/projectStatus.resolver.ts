import * as graphql from "@nestjs/graphql";
import { ProjectStatusResolverBase } from "./base/projectStatus.resolver.base";
import { ProjectStatus } from "./base/ProjectStatus";
import { ProjectStatusService } from "./projectStatus.service";

@graphql.Resolver(() => ProjectStatus)
export class ProjectStatusResolver extends ProjectStatusResolverBase {
  constructor(protected readonly service: ProjectStatusService) {
    super(service);
  }
}
