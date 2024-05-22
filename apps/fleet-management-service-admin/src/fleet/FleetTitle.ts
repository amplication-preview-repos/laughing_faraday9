import { Fleet as TFleet } from "../api/fleet/Fleet";

export const FLEET_TITLE_FIELD = "id";

export const FleetTitle = (record: TFleet): string => {
  return record.id?.toString() || String(record.id);
};
