import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { ProjectModule } from '../src/modules/project/project.module';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import {
  Project,
  ProjectCategory,
} from '../src/modules/project/entities/project.entity';
import { repositoryMockFactory } from './test-utils/repository-mock-factory';
import { ProjectController } from '../src/modules/project/project.controller';
import { ProjectService } from '../src/modules/project/project.service';
import { Repository } from 'typeorm';

describe('ProjectsController (e2e)', () => {
  let app: INestApplication;
  let repository: Repository<Project>;
  let projectService: ProjectService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [ProjectController],
      providers: [
        ProjectService,
        {
          provide: getRepositoryToken(Project),
          useFactory: repositoryMockFactory,
        },
        // {
        //   provide: getRepositoryToken(ProjectCategory),
        //   useFactory: repositoryMockFactory,
        // },
      ],
      imports: [],
    }).compile();

    repository = await moduleFixture.resolve<Repository<Project>>(
      getRepositoryToken(Project),
    );
    projectService = await moduleFixture.resolve<ProjectService>(
      ProjectService,
    );

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should GET /projects/', () => {
    request(app.getHttpServer())
      .get('/projects')
      .expect(200)
      .then((response) => {
        expect(repository.find).toHaveBeenCalled();
      });
  });

  it('should GET projects/{id}', () => {
    request(app.getHttpServer())
      .get('/projects/1')
      .expect(200)
      .then((response) => {
        expect(repository.findOneBy).toHaveBeenCalled();
      });
  });

  it('should NOT GET projects/{id} and raise NotFoundError', () => {
    request(app.getHttpServer())
      .get('/projects/1337')
      .expect(200)
      .then((response) => {
        console.log('Response', response);
        expect(repository.findOneBy).toHaveBeenCalled();
      });
  });

  afterAll(() => {
    app.close();
  });
});
