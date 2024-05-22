import { EnergyDataWhereInput } from "./EnergyDataWhereInput";
import { EnergyDataOrderByInput } from "./EnergyDataOrderByInput";

export type EnergyDataFindManyArgs = {
  where?: EnergyDataWhereInput;
  orderBy?: Array<EnergyDataOrderByInput>;
  skip?: number;
  take?: number;
};
