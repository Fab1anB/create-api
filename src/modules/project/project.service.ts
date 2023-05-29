import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Repository } from 'typeorm';
// import S3 from 'aws-sdk/clients/s3';
import { config } from '../../config';
import { initBucket } from '../../utils/init-bucket';
import { uploadToS3 } from '../../utils/upload-to-s3';
import { S3 } from 'aws-sdk';
import { S3BucketInitializationException } from '../errors/s3-errors';

@Injectable()
export class ProjectService {
  private readonly logger = new Logger(ProjectService.name);
  constructor(
    @InjectRepository(Project)
    private projectRepository: Repository<Project>,
  ) {}

  create(createProjectDto: CreateProjectDto) {
    this.logger.log(
      `Create project ${createProjectDto.title}`,
      'ProjectService.create',
    );
    return this.projectRepository.save(createProjectDto);
  }

  findAll() {
    this.logger.log('Find all projects', 'ProjectService.findAll');
    return this.projectRepository.find();
  }

  async findOne(id: number) {
    this.logger.log(`Find project ${id}`, 'ProjectService.findOne');
    const found = await this.projectRepository.findOneBy({ id });

    if (!found) {
      throw new NotFoundException(`${id} not found.`);
    }
    return found;
  }

  async update(id: number, updateProjectDto: UpdateProjectDto) {
    this.logger.log(`Update project ${id}`, 'ProjectService.update');
    const found = await this.projectRepository.findOneBy({ id });

    if (!found) {
      throw new NotFoundException(`${id} not found.`);
    }

    return this.projectRepository.update({ id }, updateProjectDto);
  }

  remove(id: number) {
    this.logger.log(`Remove project ${id}`, 'ProjectService.remove');
    return this.projectRepository.delete({ id });
  }

  async uploadToS3(file: Express.Multer.File, projectId: number) {
    const s3 = new S3({
      region: config.region,
      accessKeyId: config.aws_access_key_id,
      secretAccessKey: config.aws_secret_access_key,
    });

    // Initialize bucket
    await initBucket(s3).catch((err) => {
      throw new S3BucketInitializationException(err.message);
    });

    const uploadRes = await uploadToS3(s3, file);

    const project = await this.projectRepository.findOneBy({ id: projectId });
    project.resultImage = uploadRes;
    await this.projectRepository.save(project);

    return uploadRes;
  }
}
