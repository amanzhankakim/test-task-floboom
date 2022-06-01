import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./client.entity";
import { Product } from "./product.entity";

@Entity("orders")
export class Order{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    date: Date

    @Column({ type: "integer" })
    total_price: number;

    @Column({ type: "integer" })
	client_id: number;
    
    @ManyToOne(() => Client, client => client.orders)
    @JoinColumn({ name: "client_id", referencedColumnName: "id" })
    client: Client

    @ManyToMany(() => Product)
    @JoinTable({name: "orders_products", joinColumn: {name: "order_id", referencedColumnName: "id"}, inverseJoinColumn: {name: "product_id", referencedColumnName: "id"}})
    products: Product[]
}