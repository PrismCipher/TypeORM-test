import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class city {
    @PrimaryGeneratedColumn()
    war_id: number;

    @PrimaryGeneratedColumn()
    state_id: number;
}