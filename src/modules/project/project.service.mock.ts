import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { IProject, Project } from './entities/project.entity';

const createProjectEntityMock: Omit<IProject, 'id'> = {
  difficulty: 1,
  categories: [],
  description: 'descriptionLong',
  resultImage: 'test.png',
  steps: [],
  subtitle: 'subtitle',
  title: 'title',
};

const projectEntityMock: IProject = {
  id: 1,
  ...createProjectEntityMock,
};

export class ProjectServiceMock {
  async create(createProjectDto: CreateProjectDto) {
    return Promise.resolve(projectEntityMock);
  }

  findAll(): Promise<Project[]> {
    return Promise.resolve([projectEntityMock]);
  }

  findOne(id: number): Promise<Project | null> {
    return Promise.resolve(projectEntityMock);
  }

  remove = jest.fn();

  async update(id: number, updateProjectDto: UpdateProjectDto) {
    return Promise.resolve({} as any);
  }

  projects: any[];

  async uploadToS3(file: Express.Multer.File): Promise<{ data: string; success: boolean; message: string } | {
    data: any;
    success: boolean;
    message: string
  } | { data: {}; success: boolean; message: string }> {
    return Promise.resolve(undefined);
  }
}
