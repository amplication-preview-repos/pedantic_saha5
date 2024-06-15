import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CrawlConfigServiceBase } from "./base/crawlConfig.service.base";

@Injectable()
export class CrawlConfigService extends CrawlConfigServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
