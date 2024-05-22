import { EnergyData as TEnergyData } from "../api/energyData/EnergyData";

export const ENERGYDATA_TITLE_FIELD = "id";

export const EnergyDataTitle = (record: TEnergyData): string => {
  return record.id?.toString() || String(record.id);
};
