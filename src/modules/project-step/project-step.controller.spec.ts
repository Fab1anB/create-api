import { Test, TestingModule } from '@nestjs/testing';
import { ProjectStepController } from './project-step.controller';
import { ProjectStepService } from './project-step.service';

describe('ProjectStepController', () => {
  let controller: ProjectStepController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectStepController],
      providers: [ProjectStepService],
    }).compile();

    controller = module.get<ProjectStepController>(ProjectStepController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
