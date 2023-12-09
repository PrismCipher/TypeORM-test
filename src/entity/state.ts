import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class city {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    state_id: number;
	
	@Column({ type: "date" })
	established_date: Date;
	
	@Column({ type: "boolean" })
	current_existence: boolean;
	
	@Column()
	capital_city_id: number;
}