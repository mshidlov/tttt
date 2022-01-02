import { Tata as TTata } from "../api/tata/Tata";

export const TATA_TITLE_FIELD = "id";

export const TataTitle = (record: TTata): string => {
  return record.id || record.id;
};
