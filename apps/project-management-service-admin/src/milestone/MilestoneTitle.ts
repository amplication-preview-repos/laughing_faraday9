import { Milestone as TMilestone } from "../api/milestone/Milestone";

export const MILESTONE_TITLE_FIELD = "id";

export const MilestoneTitle = (record: TMilestone): string => {
  return record.id?.toString() || String(record.id);
};
