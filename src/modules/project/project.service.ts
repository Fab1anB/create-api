import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectService {
  private readonly logger = new Logger(ProjectService.name);
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
  ) {}

  create(createProjectDto: CreateProjectDto) {
    this.logger.log(
      `Create project ${createProjectDto.title}`,
      'ProjectService.create',
    );
    return this.projectRepository.save(createProjectDto);
  }

  findAll() {
    this.logger.log('Find all projects', 'ProjectService.findAll');
    return this.projectRepository.find();
  }

  async findOne(id: number) {
    this.logger.log(`Find project ${id}`, 'ProjectService.findOne');
    const found = await this.projectRepository.findOneBy({ id });

    if (!found) {
      throw new NotFoundException(`${id} not found.`);
    }
    return found;
  }

  async update(id: number, updateProjectDto: UpdateProjectDto) {
    this.logger.log(`Update project ${id}`, 'ProjectService.update');
    const found = await this.projectRepository.findOneBy({ id });

    if (!found) {
      throw new NotFoundException(`${id} not found.`);
    }

    return this.projectRepository.update({ id }, updateProjectDto);
  }

  remove(id: number) {
    this.logger.log(`Remove project ${id}`, 'ProjectService.remove');
    return this.projectRepository.delete({ id });
  }
}
