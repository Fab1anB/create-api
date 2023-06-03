import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectCategory } from './entities/project.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectCategoryService {
  private logger = new Logger(ProjectCategoryService.name);

  constructor(
    @InjectRepository(ProjectCategory)
    private categoryRepository: Repository<ProjectCategory>,
  ) {}

  findSimilarProjectCategories(userInput: string) {
    this.logger.log(
      'Find similar project categories for ' + userInput.toString(),
      'ProjectCategoryService.findSimilarProjectCategories',
    );
    return this.categoryRepository
      .createQueryBuilder()
      .select()
      .where('SOUNDEX(title) = SOUNDEX(:title)', { title: `${userInput}` })
      .orWhere('title LIKE :title', { title: `%${userInput}%` })
      .getMany();
  }
}
