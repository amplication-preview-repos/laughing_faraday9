import { SubTaskWhereInput } from "./SubTaskWhereInput";
import { SubTaskOrderByInput } from "./SubTaskOrderByInput";

export type SubTaskFindManyArgs = {
  where?: SubTaskWhereInput;
  orderBy?: Array<SubTaskOrderByInput>;
  skip?: number;
  take?: number;
};
