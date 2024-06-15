import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PageContentService } from "./pageContent.service";
import { PageContentControllerBase } from "./base/pageContent.controller.base";

@swagger.ApiTags("pageContents")
@common.Controller("pageContents")
export class PageContentController extends PageContentControllerBase {
  constructor(protected readonly service: PageContentService) {
    super(service);
  }
}
