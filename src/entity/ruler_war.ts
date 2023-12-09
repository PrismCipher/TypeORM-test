import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class city {
    @PrimaryGeneratedColumn()
    ruler_id: number;

    @PrimaryGeneratedColumn()
    war_id: number;
}