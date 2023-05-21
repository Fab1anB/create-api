import { Module } from '@nestjs/common';
import { ProjectStepService } from './project-step.service';
import { ProjectStepController } from './project-step.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectStep } from './entities/project-step.entity';
import { ProjectModule } from '../project/project.module';

@Module({
  imports: [TypeOrmModule.forFeature([ProjectStep]), ProjectModule],
  exports: [TypeOrmModule],
  controllers: [ProjectStepController],
  providers: [ProjectStepService],
})
export class ProjectStepModule {}
