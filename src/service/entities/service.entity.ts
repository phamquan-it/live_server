import { ServiceStatus } from "enums/ServiceStatus";
import { Category } from "src/category/entities/category.entity";
import { Order } from "src/orders/entities/order.entity";
import { Platform } from "src/platforms/entities/platform.entity";
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Service {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    intitalial_rate: number

    @Column()
    price: number;

    @Column({
        type: 'enum',
        enum: ServiceStatus,
        default: ServiceStatus.ACTIVE
    })
    status: ServiceStatus

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;
  
    @UpdateDateColumn({ type: 'timestamp' })
    updated_at: Date;

    @ManyToOne(()=> Platform, (platform)=> platform.services)
    platform: Platform

    @ManyToOne(()=> Order, (order)=> order.services)
    order: Order

    @ManyToMany(()=> Category, (category)=> category.servives)
    @JoinTable({
        name:"service_category"
    })
    categories: Category[]
}
