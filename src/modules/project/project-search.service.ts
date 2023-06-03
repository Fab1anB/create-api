import { Injectable, Logger } from '@nestjs/common';
import { In, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';

@Injectable()
export class ProjectSearchService {
  private logger = new Logger(ProjectSearchService.name);

  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
  ) {}

  findAllWithCategories(categories: string[]) {
    this.logger.log(
      'Find all projects for categories ' + categories.toString(),
      'ProjectService.findAll',
    );
    return this.projectRepository.find({
      relations: {
        categories: true,
      },
      where: { categories: { title: In(categories) } },
      relationLoadStrategy: 'query',
    });
  }
}