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
      'FindAll projects with categories ' + categories.toString(),
      'ProjectSearchService.findAllWithCategories',
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
