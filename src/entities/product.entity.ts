import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./order.entity";
import { OrderItem } from "./orderItem.entity";

@Entity("products")
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar", length: 200, nullable: false })
    name: string;

    @Column({ type: "integer" })
    price: number;

    @OneToMany(() => OrderItem, orderItem => orderItem.product)
    orderItems: OrderItem[]
}
