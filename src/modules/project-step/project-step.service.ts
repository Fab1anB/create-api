import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateProjectStepDto } from './dto/create-project-step.dto';
import { UpdateProjectStepDto } from './dto/update-project-step.dto';
import { Repository } from 'typeorm';
import { ProjectStep } from './entities/project-step.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from '../project/entities/project.entity';

@Injectable()
export class ProjectStepService {
  private logger = new Logger(ProjectStepService.name);

  constructor(
    @InjectRepository(ProjectStep)
    private projectStepRepository: Repository<ProjectStep>,
    @InjectRepository(Project) private projectRepository: Repository<Project>,
  ) {}

  async create(createProjectStepDto: CreateProjectStepDto, projectId: number) {
    this.logger.log(
      `Create ProjectStep ${createProjectStepDto.title} for Project ${projectId}`,
      'ProjectStepService.create',
    );

    const project = await this.projectRepository.findOneBy({ id: projectId });

    if (!project) {
      throw new NotFoundException(`Project ${projectId} not found`);
    }

    createProjectStepDto.project = project;
    const projectStep = await this.projectStepRepository.save(
      createProjectStepDto,
    );

    if (!project.steps?.length) {
      project.steps = [];
    }

    projectStep.project = undefined;
    return projectStep;
  }

  async findAll(projectId: number) {
    this.logger.log(
      `Find all ProjectSteps for Project ${projectId}`,
      'ProjectStepService.findAll',
    );
    const project = await this.projectRepository.findOne({
      where: { id: projectId },
    });
    return this.projectStepRepository.find({
      where: {
        project: project,
      },
    });
  }

  findOne(id: number) {
    this.logger.log(`Find ProjectStep ${id}`, 'ProjectStepService.findOne');
    return this.projectStepRepository.findOneBy({ id });
  }

  update(id: number, updateProjectStepDto: UpdateProjectStepDto) {
    this.logger.log(`Update ProjectStep ${id}`, 'ProjectStepService.update');
    return this.projectStepRepository.update({ id }, updateProjectStepDto);
  }

  remove(id: number) {
    this.logger.log(`Remove ProjectStep ${id}`, 'ProjectStepService.remove');
    return this.projectStepRepository.delete({ id });
  }
}
