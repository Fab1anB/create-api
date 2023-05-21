import { Test, TestingModule } from "@nestjs/testing";
import { ProjectService } from "./project.service";
import { Project } from "./entities/project.entity";
import { ProjectModule } from "./project.module";
import { getRepositoryToken } from "@nestjs/typeorm";
import { INestApplication } from "@nestjs/common";
import { ProjectServiceMock } from "./project.service.mock";
import * as request from "supertest";

describe.only('Projects', () => {
  let app: INestApplication;
  const projectService = new ProjectServiceMock();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProjectService,
        { provide: getRepositoryToken(Project), useValue: {} },
      ],
      imports: [ProjectModule],
    }).compile();

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
