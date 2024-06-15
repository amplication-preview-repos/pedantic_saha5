import { PageContent as TPageContent } from "../api/pageContent/PageContent";

export const PAGECONTENT_TITLE_FIELD = "id";

export const PageContentTitle = (record: TPageContent): string => {
  return record.id?.toString() || String(record.id);
};
