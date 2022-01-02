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
import { CreateTataArgs } from "./CreateTataArgs";
import { UpdateTataArgs } from "./UpdateTataArgs";
import { DeleteTataArgs } from "./DeleteTataArgs";
import { TataFindManyArgs } from "./TataFindManyArgs";
import { TataFindUniqueArgs } from "./TataFindUniqueArgs";
import { Tata } from "./Tata";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { BlaBla } from "../../blaBla/base/BlaBla";
import { TataService } from "../tata.service";

@graphql.Resolver(() => Tata)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class TataResolverBase {
  constructor(
    protected readonly service: TataService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Tata",
    action: "read",
    possession: "any",
  })
  async _tatasMeta(
    @graphql.Args() args: TataFindManyArgs
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

  @graphql.Query(() => [Tata])
  @nestAccessControl.UseRoles({
    resource: "Tata",
    action: "read",
    possession: "any",
  })
  async tatas(
    @graphql.Args() args: TataFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Tata[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Tata",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Tata, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Tata",
    action: "read",
    possession: "own",
  })
  async tata(
    @graphql.Args() args: TataFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Tata | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Tata",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Tata)
  @nestAccessControl.UseRoles({
    resource: "Tata",
    action: "create",
    possession: "any",
  })
  async createTata(
    @graphql.Args() args: CreateTataArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Tata> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Tata",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Tata"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        todo: args.data.todo
          ? {
              connect: args.data.todo,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Tata)
  @nestAccessControl.UseRoles({
    resource: "Tata",
    action: "update",
    possession: "any",
  })
  async updateTata(
    @graphql.Args() args: UpdateTataArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Tata | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Tata",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Tata"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          todo: args.data.todo
            ? {
                connect: args.data.todo,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Tata)
  @nestAccessControl.UseRoles({
    resource: "Tata",
    action: "delete",
    possession: "any",
  })
  async deleteTata(@graphql.Args() args: DeleteTataArgs): Promise<Tata | null> {
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

  @graphql.ResolveField(() => [User])
  @nestAccessControl.UseRoles({
    resource: "Tata",
    action: "read",
    possession: "any",
  })
  async users(
    @graphql.Parent() parent: Tata,
    @graphql.Args() args: UserFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<User[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "User",
    });
    const results = await this.service.findUsers(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }

  @graphql.ResolveField(() => BlaBla, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Tata",
    action: "read",
    possession: "any",
  })
  async todo(
    @graphql.Parent() parent: Tata,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<BlaBla | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "BlaBla",
    });
    const result = await this.service.getTodo(parent.id);

    if (!result) {
      return null;
    }
    return permission.filter(result);
  }
}
