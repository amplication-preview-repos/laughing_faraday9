import { ProjectStatusWhereInput } from "./ProjectStatusWhereInput";
import { ProjectStatusOrderByInput } from "./ProjectStatusOrderByInput";

export type ProjectStatusFindManyArgs = {
  where?: ProjectStatusWhereInput;
  orderBy?: Array<ProjectStatusOrderByInput>;
  skip?: number;
  take?: number;
};
