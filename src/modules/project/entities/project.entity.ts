import { ProjectStep } from '../../project-step/entities/project-step.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
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

  description: string;

  difficulty: number;

  resultImage?: string;

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
  description: string;

  @Column({default: 3})
    difficulty: number;

  @Column({ nullable: true})
  resultImage?: string;

  @OneToMany((type) => ProjectStep, (step) => step.id)
  steps: ProjectStep[];

  @ManyToMany((type) => ProjectCategory, (category) => category.title, {
    cascade: true,
    eager: true,
  })
  @JoinTable()
  categories: ProjectCategory[];
}
