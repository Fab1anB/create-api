import {IProject, Project, ProjectCategory} from "../entities/project.entity";
import {ProjectStep} from "../../project-step/entities/project-step.entity";

export class CreateProjectDto implements Omit<IProject, 'id'> {
    categories: ProjectCategory [];
    descriptionLong: string;
    descriptionShort: string;
    steps: ProjectStep[];
    subtitle: string;
    title: string;
    resultImage: string;
}
