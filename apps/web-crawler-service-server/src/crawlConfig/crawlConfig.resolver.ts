import * as graphql from "@nestjs/graphql";
import { CrawlConfigResolverBase } from "./base/crawlConfig.resolver.base";
import { CrawlConfig } from "./base/CrawlConfig";
import { CrawlConfigService } from "./crawlConfig.service";

@graphql.Resolver(() => CrawlConfig)
export class CrawlConfigResolver extends CrawlConfigResolverBase {
  constructor(protected readonly service: CrawlConfigService) {
    super(service);
  }
}
