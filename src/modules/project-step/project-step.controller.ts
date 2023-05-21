import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Logger,
  ParseIntPipe,
} from '@nestjs/common';
import { ProjectStepService } from './project-step.service';
import { CreateProjectStepDto } from './dto/create-project-step.dto';
import { UpdateProjectStepDto } from './dto/update-project-step.dto';

@Controller('projects/:projectId/steps')
export class ProjectStepController {
  private readonly logger = new Logger(ProjectStepController.name);

  constructor(private readonly projectStepService: ProjectStepService) {}

  @Post()
  create(
    @Param('projectId', ParseIntPipe) projectId: number,
    @Body() createProjectStepDto: CreateProjectStepDto,
  ) {
    this.logger.debug('Create Project Step', createProjectStepDto);
    return this.projectStepService.create(createProjectStepDto, projectId);
  }

  @Get()
  findAll(@Param('projectId', ParseIntPipe) projectId: number) {
    return this.projectStepService.findAll(projectId);
  }

  @Get(':id')
  findOne(
    @Param('projectId', ParseIntPipe) projectId: number,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.projectStepService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('projectId', ParseIntPipe) projectId: number,
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProjectStepDto: UpdateProjectStepDto,
  ) {
    return this.projectStepService.update(id, updateProjectStepDto);
  }

  @Delete(':id')
  remove(
    @Param('projectId', ParseIntPipe) projectId: number,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.projectStepService.remove(id);
  }
}
