import { SystemStatus as TSystemStatus } from "../api/systemStatus/SystemStatus";

export const SYSTEMSTATUS_TITLE_FIELD = "id";

export const SystemStatusTitle = (record: TSystemStatus): string => {
  return record.id?.toString() || String(record.id);
};
