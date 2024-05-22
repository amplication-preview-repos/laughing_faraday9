import { OwnershipFirmWhereInput } from "./OwnershipFirmWhereInput";
import { OwnershipFirmOrderByInput } from "./OwnershipFirmOrderByInput";

export type OwnershipFirmFindManyArgs = {
  where?: OwnershipFirmWhereInput;
  orderBy?: Array<OwnershipFirmOrderByInput>;
  skip?: number;
  take?: number;
};
