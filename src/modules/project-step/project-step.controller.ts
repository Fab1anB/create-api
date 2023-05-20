import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjectStepService } from './project-step.service';
import { CreateProjectStepDto } from './dto/create-project-step.dto';
import { UpdateProjectStepDto } from './dto/update-project-step.dto';

@Controller('project-step')
export class ProjectStepController {
  constructor(private readonly projectStepService: ProjectStepService) {}

  @Post()
  create(@Body() createProjectStepDto: CreateProjectStepDto) {
    return this.projectStepService.create(createProjectStepDto);
  }

  @Get()
  findAll() {
    return this.projectStepService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectStepService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectStepDto: UpdateProjectStepDto) {
    return this.projectStepService.update(+id, updateProjectStepDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectStepService.remove(+id);
  }
}
