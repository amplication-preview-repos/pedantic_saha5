import * as graphql from "@nestjs/graphql";
import { PageContentResolverBase } from "./base/pageContent.resolver.base";
import { PageContent } from "./base/PageContent";
import { PageContentService } from "./pageContent.service";

@graphql.Resolver(() => PageContent)
export class PageContentResolver extends PageContentResolverBase {
  constructor(protected readonly service: PageContentService) {
    super(service);
  }
}
