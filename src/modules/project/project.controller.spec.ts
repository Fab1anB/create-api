import { Test, TestingModule } from '@nestjs/testing';
import { ProjectController } from './project.controller';
import { ProjectService } from './project.service';
import { IProject, Project, ProjectCategory } from './entities/project.entity';
import { CreateProjectDto } from './dto/create-project.dto';
import { ProjectModule } from './project.module';
import {
  getRepositoryToken,
  InjectRepository,
  TypeOrmModule,
} from '@nestjs/typeorm';
import { ProjectStep } from '../project-step/entities/project-step.entity';
import { ProjectStepModule } from '../project-step/project-step.module';
import { INestApplication } from '@nestjs/common';
import { ProjectServiceMock } from './project.service.mock';
import * as request from 'supertest';
import { Repository } from 'typeorm';

class ProjectRepository extends Repository<Project> {}

describe.only('Projects', () => {
  let app: INestApplication;
  let projectService = new ProjectServiceMock();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProjectService,
        { provide: getRepositoryToken(Project), useValue: {} },
      ],
      imports: [ProjectModule],
    })
      .compile();

    app = module.createNestApplication();
    await app.init();
  });

  it('should /GET projects', function () {
    return request(app.getHttpServer()).get('/projects').expect(200).expect({
      data: projectService.findAll(),
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
