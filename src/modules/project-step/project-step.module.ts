import { Module } from '@nestjs/common';
import { ProjectStepService } from './project-step.service';
import { ProjectStepController } from './project-step.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ProjectStep} from "./entities/project-step.entity";

@Module({
  imports: [TypeOrmModule.forFeature([ProjectStep])],
  exports: [TypeOrmModule],
  controllers: [ProjectStepController],
  providers: [ProjectStepService]
})
export class ProjectStepModule {}
