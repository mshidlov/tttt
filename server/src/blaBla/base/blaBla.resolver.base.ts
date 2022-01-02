import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { DeleteBlaBlaArgs } from "./DeleteBlaBlaArgs";
import { BlaBlaFindManyArgs } from "./BlaBlaFindManyArgs";
import { BlaBlaFindUniqueArgs } from "./BlaBlaFindUniqueArgs";
import { BlaBla } from "./BlaBla";
import { TataFindManyArgs } from "../../tata/base/TataFindManyArgs";
import { Tata } from "../../tata/base/Tata";
import { BlaBlaService } from "../blaBla.service";

@graphql.Resolver(() => BlaBla)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class BlaBlaResolverBase {
  constructor(
    protected readonly service: BlaBlaService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "BlaBla",
    action: "read",
    possession: "any",
  })
  async _blaBlasMeta(
    @graphql.Args() args: BlaBlaFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [BlaBla])
  @nestAccessControl.UseRoles({
    resource: "BlaBla",
    action: "read",
    possession: "any",
  })
  async blaBlas(
    @graphql.Args() args: BlaBlaFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<BlaBla[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "BlaBla",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => BlaBla, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "BlaBla",
    action: "read",
    possession: "own",
  })
  async blaBla(
    @graphql.Args() args: BlaBlaFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<BlaBla | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "BlaBla",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => BlaBla)
  @nestAccessControl.UseRoles({
    resource: "BlaBla",
    action: "delete",
    possession: "any",
  })
  async deleteBlaBla(
    @graphql.Args() args: DeleteBlaBlaArgs
  ): Promise<BlaBla | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Tata])
  @nestAccessControl.UseRoles({
    resource: "BlaBla",
    action: "read",
    possession: "any",
  })
  async tatas(
    @graphql.Parent() parent: BlaBla,
    @graphql.Args() args: TataFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Tata[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Tata",
    });
    const results = await this.service.findTatas(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }
}
