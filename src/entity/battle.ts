//battle.ts
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class battle {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    war_id: number;
	
	@Column({ type: "date" })
	date: Date;
	
	@Column()
	location: string;
}