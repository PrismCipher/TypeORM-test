import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class historical_event {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

	@Column({ type: "date" })
	date: Date;

    @Column()
    state_id: number;
	
	@Column()
	description: string;
}