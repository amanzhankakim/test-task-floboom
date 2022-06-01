import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./order.entity";

@Entity("products")
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar", length: 200, nullable: false })
    name: string;

    @Column({ type: "integer" })
    price: number;

}
