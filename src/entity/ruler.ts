import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class ruler {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ type: "date" })
	birth_date: Date;
	
	@Column({ type: "date" })
	death_date: Date;
}