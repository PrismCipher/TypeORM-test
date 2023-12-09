import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class city {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ type: "date" })
	start_date: Date;
	
	@Column({ type: "date" })
	end_date: Date;
}