import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('projects')
export class ProjectController {
  private readonly logger = new Logger(ProjectController.name);

  constructor(private readonly projectService: ProjectService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          // Generating a 32 random chars long string
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          //Calling the callback passing the random name generated with the original extension name
          cb(null, `${randomName}${file.originalname}`);
        },
      }),
    }),
  )
  async create(
    @Body() createProjectDto: CreateProjectDto,
    @UploadedFile()
    file: Express.Multer.File,
  ) {
    createProjectDto.categories = JSON.parse(
      createProjectDto.categories as any,
    );
    const project = await this.projectService.create(createProjectDto);

    const resultImage = await this.projectService.uploadToS3(file, project.id);
    project.resultImage = resultImage;
    return project;
  }

  @Get()
  findAll() {
    this.logger.log('Find all projects', 'ProjectController.findAll');
    return this.projectService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    this.logger.log(`Find project ${id}`, 'ProjectController.findOne');
    return this.projectService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateProjectDto: UpdateProjectDto) {
    this.logger.log('Update project' + id, 'ProjectController.update');
    return this.projectService.update(id, updateProjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    this.logger.log('Remove project' + id, 'ProjectController.remove');
    return this.projectService.remove(id);
  }
}
