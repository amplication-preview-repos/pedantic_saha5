/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CrawlConfig } from "./CrawlConfig";
import { CrawlConfigCountArgs } from "./CrawlConfigCountArgs";
import { CrawlConfigFindManyArgs } from "./CrawlConfigFindManyArgs";
import { CrawlConfigFindUniqueArgs } from "./CrawlConfigFindUniqueArgs";
import { DeleteCrawlConfigArgs } from "./DeleteCrawlConfigArgs";
import { CrawlConfigService } from "../crawlConfig.service";
@graphql.Resolver(() => CrawlConfig)
export class CrawlConfigResolverBase {
  constructor(protected readonly service: CrawlConfigService) {}

  async _crawlConfigsMeta(
    @graphql.Args() args: CrawlConfigCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [CrawlConfig])
  async crawlConfigs(
    @graphql.Args() args: CrawlConfigFindManyArgs
  ): Promise<CrawlConfig[]> {
    return this.service.crawlConfigs(args);
  }

  @graphql.Query(() => CrawlConfig, { nullable: true })
  async crawlConfig(
    @graphql.Args() args: CrawlConfigFindUniqueArgs
  ): Promise<CrawlConfig | null> {
    const result = await this.service.crawlConfig(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => CrawlConfig)
  async deleteCrawlConfig(
    @graphql.Args() args: DeleteCrawlConfigArgs
  ): Promise<CrawlConfig | null> {
    try {
      return await this.service.deleteCrawlConfig(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}