import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { Project, ProjectCategory } from './entities/project.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectStep } from '../project-step/entities/project-step.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Project, ProjectCategory]),
  ],
  exports: [TypeOrmModule],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class ProjectModule {}
