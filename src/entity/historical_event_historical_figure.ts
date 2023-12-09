import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class historical_event_historical_figure {
    @PrimaryGeneratedColumn()
    historical_event_id: number;

    @PrimaryGeneratedColumn()
	historical_figure_id: number;
}