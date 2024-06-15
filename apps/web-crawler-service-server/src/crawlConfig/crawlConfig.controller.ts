import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CrawlConfigService } from "./crawlConfig.service";
import { CrawlConfigControllerBase } from "./base/crawlConfig.controller.base";

@swagger.ApiTags("crawlConfigs")
@common.Controller("crawlConfigs")
export class CrawlConfigController extends CrawlConfigControllerBase {
  constructor(protected readonly service: CrawlConfigService) {
    super(service);
  }
}
