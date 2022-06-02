import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./order.entity";
import { Product } from "./product.entity";

@Entity("order_item")
export class OrderItem {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "integer" })
	quantity: number;

    @Column({ type: "integer" })
	order_id: number;

    @Column({ type: "integer" })
	product_id: number;

    @ManyToOne(() => Product, product => product.orderItems)
    @JoinColumn({ name: "product_id", referencedColumnName: "id" })
    product: Product

    @ManyToOne(() => Order, order => order.orderItems)
    @JoinColumn({ name: "order_id", referencedColumnName: "id" })
    order: Order
}