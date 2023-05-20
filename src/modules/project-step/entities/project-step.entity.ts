import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

export interface IProjectStep {
    id: number;
    title: string;
    description: string;
    image: string;
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

    constructor(id: number, title: string, description: string, image: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.image = image;
    }
}
