import { SystemStatusWhereInput } from "./SystemStatusWhereInput";
import { SystemStatusOrderByInput } from "./SystemStatusOrderByInput";

export type SystemStatusFindManyArgs = {
  where?: SystemStatusWhereInput;
  orderBy?: Array<SystemStatusOrderByInput>;
  skip?: number;
  take?: number;
};
