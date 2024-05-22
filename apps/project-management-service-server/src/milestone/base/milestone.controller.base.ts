/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { MilestoneService } from "../milestone.service";
import { MilestoneCreateInput } from "./MilestoneCreateInput";
import { Milestone } from "./Milestone";
import { MilestoneFindManyArgs } from "./MilestoneFindManyArgs";
import { MilestoneWhereUniqueInput } from "./MilestoneWhereUniqueInput";
import { MilestoneUpdateInput } from "./MilestoneUpdateInput";

export class MilestoneControllerBase {
  constructor(protected readonly service: MilestoneService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Milestone })
  async createMilestone(
    @common.Body() data: MilestoneCreateInput
  ): Promise<Milestone> {
    return await this.service.createMilestone({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Milestone] })
  @ApiNestedQuery(MilestoneFindManyArgs)
  async milestones(@common.Req() request: Request): Promise<Milestone[]> {
    const args = plainToClass(MilestoneFindManyArgs, request.query);
    return this.service.milestones({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Milestone })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async milestone(
    @common.Param() params: MilestoneWhereUniqueInput
  ): Promise<Milestone | null> {
    const result = await this.service.milestone({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Milestone })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateMilestone(
    @common.Param() params: MilestoneWhereUniqueInput,
    @common.Body() data: MilestoneUpdateInput
  ): Promise<Milestone | null> {
    try {
      return await this.service.updateMilestone({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Milestone })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteMilestone(
    @common.Param() params: MilestoneWhereUniqueInput
  ): Promise<Milestone | null> {
    try {
      return await this.service.deleteMilestone({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
