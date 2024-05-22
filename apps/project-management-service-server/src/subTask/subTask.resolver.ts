import * as graphql from "@nestjs/graphql";
import { SubTaskResolverBase } from "./base/subTask.resolver.base";
import { SubTask } from "./base/SubTask";
import { SubTaskService } from "./subTask.service";

@graphql.Resolver(() => SubTask)
export class SubTaskResolver extends SubTaskResolverBase {
  constructor(protected readonly service: SubTaskService) {
    super(service);
  }
}
