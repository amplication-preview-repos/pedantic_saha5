import { CrawlConfig as TCrawlConfig } from "../api/crawlConfig/CrawlConfig";

export const CRAWLCONFIG_TITLE_FIELD = "id";

export const CrawlConfigTitle = (record: TCrawlConfig): string => {
  return record.id?.toString() || String(record.id);
};
