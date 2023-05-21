import {Injectable, NotFoundException} from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectService {

  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
  ) {}

  create(createProjectDto: CreateProjectDto) {
    return this.projectRepository.save(createProjectDto);
  }

  findAll() {
    return this.projectRepository.find();
  }

  async findOne(id: number) {
    const found = await this.projectRepository.findOneBy({ id });

    if(!found){
      throw new NotFoundException(`${id} not found.`);
    }
    return found;
  }

 async update(id: number, updateProjectDto: UpdateProjectDto) {
    const found = await this.projectRepository.findOneBy({ id });

    if(!found){
      throw new NotFoundException(`${id} not found.`)
    }

    return this.projectRepository.update({ id }, updateProjectDto);
  }

  remove(id: number) {
    return this.projectRepository.delete({ id });
  }
}
