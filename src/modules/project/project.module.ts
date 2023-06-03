import { Module } from "@nestjs/common";
import { ProjectService } from "./project.service";
import { ProjectController } from "./project.controller";
import { Project, ProjectCategory } from "./entities/project.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProjectSearchService } from './project-search.service';

@Module({
  imports: [TypeOrmModule.forFeature([Project, ProjectCategory])],
  exports: [TypeOrmModule],
  controllers: [ProjectController],
  providers: [ProjectService, ProjectSearchService],
})
export class ProjectModule {}
