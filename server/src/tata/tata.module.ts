import { Module } from "@nestjs/common";
import { TataModuleBase } from "./base/tata.module.base";
import { TataService } from "./tata.service";
import { TataController } from "./tata.controller";
import { TataResolver } from "./tata.resolver";

@Module({
  imports: [TataModuleBase],
  controllers: [TataController],
  providers: [TataService, TataResolver],
  exports: [TataService],
})
export class TataModule {}
