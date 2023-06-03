import { Test, TestingModule } from '@nestjs/testing';
import { ProjectSearchService } from './project-search.service';

describe('ProjectSearchService', () => {
  let service: ProjectSearchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectSearchService],
    }).compile();

    service = module.get<ProjectSearchService>(ProjectSearchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
