import { Module } from "@nestjs/common";
import { PageContentModuleBase } from "./base/pageContent.module.base";
import { PageContentService } from "./pageContent.service";
import { PageContentController } from "./pageContent.controller";
import { PageContentResolver } from "./pageContent.resolver";

@Module({
  imports: [PageContentModuleBase],
  controllers: [PageContentController],
  providers: [PageContentService, PageContentResolver],
  exports: [PageContentService],
})
export class PageContentModule {}
