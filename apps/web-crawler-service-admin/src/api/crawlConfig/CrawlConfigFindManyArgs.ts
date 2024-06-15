import { CrawlConfigWhereInput } from "./CrawlConfigWhereInput";
import { CrawlConfigOrderByInput } from "./CrawlConfigOrderByInput";

export type CrawlConfigFindManyArgs = {
  where?: CrawlConfigWhereInput;
  orderBy?: Array<CrawlConfigOrderByInput>;
  skip?: number;
  take?: number;
};
