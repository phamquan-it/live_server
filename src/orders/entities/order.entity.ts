import { ApiTags } from "@nestjs/swagger";
import { link } from "fs";
import { Link } from "src/links/entities/link.entity";
import { LogOrder } from "src/log_order/entities/log_order.entity";
import { OrderStatus } from "src/order_status/entities/order_status.entity";
import { Service } from "src/service/entities/service.entity";
import { User } from "src/users/entities/user.entity";
import { Vps } from "src/vps/entities/vp.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@ApiTags('Order')
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

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
  
    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: Date;

    @ManyToOne(()=> OrderStatus, (order_status)=>order_status.orders)
    order_status: OrderStatus

    @ManyToOne(()=> User, (user)=>user.orders)
    user: User

    @OneToMany(()=>Service, (service)=> service.order)
    services: Service[]

    @OneToMany(()=>Vps, (vps)=> vps.order)
    vpss: Vps[]

    @OneToMany(()=>Link, (link)=> link.order)
    links: Link[]

    @OneToMany(()=> LogOrder, (log_order)=> log_order.order)
    log_order: LogOrder[]
}
