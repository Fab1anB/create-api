import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectModule } from './modules/project/project.module';
import { ProjectStepModule } from './modules/project-step/project-step.module';
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'create',
      entities: [],
      synchronize: true,
      autoLoadEntities: true
    }),
    ProjectModule,
    ProjectStepModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
