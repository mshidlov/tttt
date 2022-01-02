import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TataService } from "./tata.service";
import { TataControllerBase } from "./base/tata.controller.base";

@swagger.ApiTags("tatas")
@common.Controller("tatas")
export class TataController extends TataControllerBase {
  constructor(
    protected readonly service: TataService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
