import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class reign {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    ruler_id: number;

    @Column()
    state_id: number;
	
	@Column({ type: "date" })
	start_date: Date;
	
	@Column({ type: "date" })
	end_date: Date;
}