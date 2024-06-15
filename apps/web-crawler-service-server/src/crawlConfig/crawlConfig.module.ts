import { Module } from "@nestjs/common";
import { CrawlConfigModuleBase } from "./base/crawlConfig.module.base";
import { CrawlConfigService } from "./crawlConfig.service";
import { CrawlConfigController } from "./crawlConfig.controller";
import { CrawlConfigResolver } from "./crawlConfig.resolver";

@Module({
  imports: [CrawlConfigModuleBase],
  controllers: [CrawlConfigController],
  providers: [CrawlConfigService, CrawlConfigResolver],
  exports: [CrawlConfigService],
})
export class CrawlConfigModule {}
