import { OwnershipFirm as TOwnershipFirm } from "../api/ownershipFirm/OwnershipFirm";

export const OWNERSHIPFIRM_TITLE_FIELD = "id";

export const OwnershipFirmTitle = (record: TOwnershipFirm): string => {
  return record.id?.toString() || String(record.id);
};
