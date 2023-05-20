import { ProjectStep } from '../../project-step/entities/project-step.entity';
import {
  Column,
  Entity,
  OneToMany,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  PrimaryColumn,
} from 'typeorm';

export interface IProjectCategory {
  title: string;
  projects?: Project[];
}

@Entity()
export class ProjectCategory implements IProjectCategory {
  @PrimaryColumn()
  title: string;

  @ManyToMany((type) => Project, (project) => project.id)
  projects?: Project[];
}

export interface IProject {
  id: number;

  title: string;

  subtitle: string;

  descriptionShort: string;

  descriptionLong: string;

  resultImage: string;

  steps: ProjectStep[];

  categories: ProjectCategory[];
}

@Entity()
export class Project implements IProject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  subtitle: string;

  @Column()
  descriptionShort: string;

  @Column()
  descriptionLong: string;

  @Column()
  resultImage: string;

  @OneToMany((type) => ProjectStep, (step) => step.id)
  steps: ProjectStep[];

  @ManyToMany((type) => ProjectCategory, (category) => category.title, {
    cascade: true,
    eager: true,
  })
  @JoinTable()
  categories: ProjectCategory[];
}