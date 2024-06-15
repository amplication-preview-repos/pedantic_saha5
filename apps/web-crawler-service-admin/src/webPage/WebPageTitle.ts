import { WebPage as TWebPage } from "../api/webPage/WebPage";

export const WEBPAGE_TITLE_FIELD = "id";

export const WebPageTitle = (record: TWebPage): string => {
  return record.id?.toString() || String(record.id);
};
