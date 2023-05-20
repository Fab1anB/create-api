import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectStepDto } from './create-project-step.dto';

export class UpdateProjectStepDto extends PartialType(CreateProjectStepDto) {}
