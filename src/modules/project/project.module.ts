import { Module } from "@nestjs/common";
import { ProjectService } from "./project.service";
import { ProjectController } from "./project.controller";
import { Project, ProjectCategory } from "./entities/project.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProjectSearchService } from './project-search.service';
import { ProjectCategoryService } from './project-category.service';
import { ProjectCategoryController } from './project-category.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Project, ProjectCategory])],
  exports: [TypeOrmModule],
  controllers: [ProjectController, ProjectCategoryController],
  providers: [ProjectService, ProjectSearchService, ProjectCategoryService],
})
export class ProjectModule {}
