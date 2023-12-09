import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class historical_figure {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

	@Column({ type: "date" })
	birth_date: Date;
	
	@Column({ type: "date" })
	death_date: Date;

	@Column()
	occupation: string;

    @Column()
    state_id: number;
	
	@Column()
	biography: string;
}