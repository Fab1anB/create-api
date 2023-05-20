import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { IProject, Project } from './entities/project.entity';
import { Repository } from 'typeorm';
import { Public } from '../../utils/public';
import { ProjectService } from './project.service';

const createProjectEntityMock: Omit<IProject, 'id'> = {
  categories: [],
  descriptionLong: 'descriptionLong',
  descriptionShort: 'descriptionShort',
  resultImage: 'test.png',
  steps: [],
  subtitle: 'subtitle',
  title: 'title',
};

const projectEntityMock: IProject = {
  id: 1,
  ...createProjectEntityMock,
};

export class ProjectServiceMock implements Public<ProjectService> {
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
}