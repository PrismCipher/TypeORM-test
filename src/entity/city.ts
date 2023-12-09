import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class city {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    state_id: number;
}