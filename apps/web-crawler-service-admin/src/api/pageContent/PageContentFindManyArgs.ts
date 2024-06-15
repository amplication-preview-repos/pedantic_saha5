import { PageContentWhereInput } from "./PageContentWhereInput";
import { PageContentOrderByInput } from "./PageContentOrderByInput";

export type PageContentFindManyArgs = {
  where?: PageContentWhereInput;
  orderBy?: Array<PageContentOrderByInput>;
  skip?: number;
  take?: number;
};
