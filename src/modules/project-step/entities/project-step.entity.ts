import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Project } from '../../project/entities/project.entity';
import {ProjectStepService} from "../project-step.service";

export interface IProjectStep {
  id: number;
  title: string;
  description: string;
  image: string;
  project: Project;
}

@Entity()
export class ProjectStep implements IProjectStep {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  image: string;

  @ManyToOne(() => Project, (project) => project.id)
  project: Project;
}
