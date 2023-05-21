import { Project } from '../../project/entities/project.entity';
import { IProjectStep } from '../entities/project-step.entity';
import { IsString, Length } from 'class-validator';

export class CreateProjectStepDto implements Omit<IProjectStep, 'id'> {
  @IsString()
  @Length(1, 60)
  title: string;

  @IsString()
  @Length(5, 600)
  description: string;

  @IsString()
  @Length(5)
  image: string;

  project: Project;
}
