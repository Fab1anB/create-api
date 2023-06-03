import {
  IProject,
  IProjectCategory,
  Project,
} from '../entities/project.entity';
import { ProjectStep } from '../../project-step/entities/project-step.entity';
import { IsString, Length } from 'class-validator';

export class CreateProjectCategoryDto implements IProjectCategory {
  @Length(1, 60)
  @IsString()
  title: string;

  projects?: Project[];
}

export class CreateProjectDto implements Omit<IProject, 'id'> {
  // @ArrayMinSize(1)
  // @ValidateNested()
  categories: CreateProjectCategoryDto[];

  @IsString()
  @Length(5, 6000)
  description: string;

  steps: ProjectStep[];


  difficulty: number;

  @IsString()
  @Length(1, 60)
  subtitle: string;

  @IsString()
  @Length(1, 60)
  title: string;

  resultImage?: string;
}
