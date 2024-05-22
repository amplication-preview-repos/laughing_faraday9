import { System as TSystem } from "../api/system/System";

export const SYSTEM_TITLE_FIELD = "id";

export const SystemTitle = (record: TSystem): string => {
  return record.id?.toString() || String(record.id);
};
