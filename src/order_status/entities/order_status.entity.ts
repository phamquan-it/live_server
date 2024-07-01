import { Order } from "src/orders/entities/order.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity()
export class OrderStatus {
    @PrimaryColumn()
    id: number

    @Column()
    name: string;

    @Column()
    name_vi: string;

    @OneToMany(()=> Order,   (order)=> order.order_status)
    orders:  Order[]
}
