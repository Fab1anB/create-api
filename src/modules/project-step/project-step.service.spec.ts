import { Test, TestingModule } from '@nestjs/testing';
import { ProjectStepService } from './project-step.service';

describe('ProjectStepService', () => {
  let service: ProjectStepService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectStepService],
    }).compile();

    service = module.get<ProjectStepService>(ProjectStepService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
