import { ProjectStatus as TProjectStatus } from "../api/projectStatus/ProjectStatus";

export const PROJECTSTATUS_TITLE_FIELD = "id";

export const ProjectStatusTitle = (record: TProjectStatus): string => {
  return record.id?.toString() || String(record.id);
};
