import { SubTask as TSubTask } from "../api/subTask/SubTask";

export const SUBTASK_TITLE_FIELD = "id";

export const SubTaskTitle = (record: TSubTask): string => {
  return record.id?.toString() || String(record.id);
};
