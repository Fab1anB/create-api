import { Body, Controller, Post } from '@nestjs/common';
import { ProjectCategoryService } from './project-category.service';

@Controller('categories')
export class ProjectCategoryController {
  constructor(
    private readonly projectCategoryService: ProjectCategoryService,
  ) {}

  @Post('find')
  findSimilarProjectCategories(@Body() data: { input: string }) {
    return this.projectCategoryService.findSimilarProjectCategories(data.input);
  }
}
