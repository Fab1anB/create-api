import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';

@Controller('projects')
export class ProjectController {
  private readonly logger = new Logger(ProjectController.name);

  constructor(private readonly projectService: ProjectService) {}

  @Post()
  create(@Body() createProjectDto: CreateProjectDto) {
    this.logger.log(
      `Create project ${createProjectDto.title}`,
      'ProjectController.create',
    );
    return this.projectService.create(createProjectDto);
  }

  @Get()
  findAll() {
    this.logger.log('Find all projects', 'ProjectController.findAll');
    return this.projectService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    this.logger.log(`Find project ${id}`, 'ProjectController.findOne');
    return this.projectService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateProjectDto: UpdateProjectDto) {
    this.logger.log('Update project' + id, 'ProjectController.update');
    return this.projectService.update(id, updateProjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    this.logger.log('Remove project' + id, 'ProjectController.remove');
    return this.projectService.remove(id);
  }
}
