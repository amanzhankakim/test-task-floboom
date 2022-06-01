import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./order.entity";

@Entity("clients")
export class Client{

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar", length: 200, nullable: false })
	name: string;

    @Column({ type: "varchar", length: 200, nullable: false })
	email: string;

    @OneToMany(() => Order, order => order.client)
    orders: Order[]
}