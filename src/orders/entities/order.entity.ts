import { OrderStatus } from "src/order_status/entities/order_status.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    price: string

    @Column()
    total: number

    @ManyToOne(()=> OrderStatus, (order_status)=>order_status.orders)
    order_status: OrderStatus

    @ManyToOne(()=> User, (user)=>user.orders)
    user: User
}
