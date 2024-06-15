/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, WebPage as PrismaWebPage } from "@prisma/client";

export class WebPageServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.WebPageCountArgs, "select">): Promise<number> {
    return this.prisma.webPage.count(args);
  }

  async webPages<T extends Prisma.WebPageFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.WebPageFindManyArgs>
  ): Promise<PrismaWebPage[]> {
    return this.prisma.webPage.findMany<Prisma.WebPageFindManyArgs>(args);
  }
  async webPage<T extends Prisma.WebPageFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.WebPageFindUniqueArgs>
  ): Promise<PrismaWebPage | null> {
    return this.prisma.webPage.findUnique(args);
  }
  async createWebPage<T extends Prisma.WebPageCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WebPageCreateArgs>
  ): Promise<PrismaWebPage> {
    return this.prisma.webPage.create<T>(args);
  }
  async updateWebPage<T extends Prisma.WebPageUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.WebPageUpdateArgs>
  ): Promise<PrismaWebPage> {
    return this.prisma.webPage.update<T>(args);
  }
  async deleteWebPage<T extends Prisma.WebPageDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.WebPageDeleteArgs>
  ): Promise<PrismaWebPage> {
    return this.prisma.webPage.delete(args);
  }
}