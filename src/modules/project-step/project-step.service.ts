import { Injectable } from '@nestjs/common';
import { CreateProjectStepDto } from './dto/create-project-step.dto';
import { UpdateProjectStepDto } from './dto/update-project-step.dto';
import {Repository} from "typeorm";
import {ProjectStep} from "./entities/project-step.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Project} from "../project/entities/project.entity";

@Injectable()
export class ProjectStepService {
  constructor(@InjectRepository(ProjectStep) private repository: Repository<ProjectStep>) {
  }
  create(createProjectStepDto: CreateProjectStepDto) {
    return 'This action adds a new projectStep';
  }

  findAll() {
    return `This action returns all projectStep`;
  }

  findOne(id: number) {
    return `This action returns a #${id} projectStep`;
  }

  update(id: number, updateProjectStepDto: UpdateProjectStepDto) {
    return `This action updates a #${id} projectStep`;
  }

  remove(id: number) {
    return `This action removes a #${id} projectStep`;
  }
}
